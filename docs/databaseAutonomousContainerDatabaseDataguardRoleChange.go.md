# `databaseAutonomousContainerDatabaseDataguardRoleChange` Submodule <a name="`databaseAutonomousContainerDatabaseDataguardRoleChange` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousContainerDatabaseDataguardRoleChange <a name="DatabaseAutonomousContainerDatabaseDataguardRoleChange" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change oci_database_autonomous_container_database_dataguard_role_change}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomouscontainerdatabasedataguardrolechange"

databaseautonomouscontainerdatabasedataguardrolechange.NewDatabaseAutonomousContainerDatabaseDataguardRoleChange(scope Construct, id *string, config DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig) DatabaseAutonomousContainerDatabaseDataguardRoleChange
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig">DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig">DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.resetConnectionStringsType">ResetConnectionStringsType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts">DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts</a>

---

##### `ResetConnectionStringsType` <a name="ResetConnectionStringsType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.resetConnectionStringsType"></a>

```go
func ResetConnectionStringsType()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseAutonomousContainerDatabaseDataguardRoleChange resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomouscontainerdatabasedataguardrolechange"

databaseautonomouscontainerdatabasedataguardrolechange.DatabaseAutonomousContainerDatabaseDataguardRoleChange_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomouscontainerdatabasedataguardrolechange"

databaseautonomouscontainerdatabasedataguardrolechange.DatabaseAutonomousContainerDatabaseDataguardRoleChange_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomouscontainerdatabasedataguardrolechange"

databaseautonomouscontainerdatabasedataguardrolechange.DatabaseAutonomousContainerDatabaseDataguardRoleChange_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomouscontainerdatabasedataguardrolechange"

databaseautonomouscontainerdatabasedataguardrolechange.DatabaseAutonomousContainerDatabaseDataguardRoleChange_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseAutonomousContainerDatabaseDataguardRoleChange resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseAutonomousContainerDatabaseDataguardRoleChange to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseAutonomousContainerDatabaseDataguardRoleChange that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousContainerDatabaseDataguardRoleChange to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference">DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.autonomousContainerDatabaseDataguardAssociationIdInput">AutonomousContainerDatabaseDataguardAssociationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.autonomousContainerDatabaseIdInput">AutonomousContainerDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.connectionStringsTypeInput">ConnectionStringsTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.autonomousContainerDatabaseDataguardAssociationId">AutonomousContainerDatabaseDataguardAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.autonomousContainerDatabaseId">AutonomousContainerDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.connectionStringsType">ConnectionStringsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.timeouts"></a>

```go
func Timeouts() DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference">DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference</a>

---

##### `AutonomousContainerDatabaseDataguardAssociationIdInput`<sup>Optional</sup> <a name="AutonomousContainerDatabaseDataguardAssociationIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.autonomousContainerDatabaseDataguardAssociationIdInput"></a>

```go
func AutonomousContainerDatabaseDataguardAssociationIdInput() *string
```

- *Type:* *string

---

##### `AutonomousContainerDatabaseIdInput`<sup>Optional</sup> <a name="AutonomousContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.autonomousContainerDatabaseIdInput"></a>

```go
func AutonomousContainerDatabaseIdInput() *string
```

- *Type:* *string

---

##### `ConnectionStringsTypeInput`<sup>Optional</sup> <a name="ConnectionStringsTypeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.connectionStringsTypeInput"></a>

```go
func ConnectionStringsTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AutonomousContainerDatabaseDataguardAssociationId`<sup>Required</sup> <a name="AutonomousContainerDatabaseDataguardAssociationId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.autonomousContainerDatabaseDataguardAssociationId"></a>

```go
func AutonomousContainerDatabaseDataguardAssociationId() *string
```

- *Type:* *string

---

##### `AutonomousContainerDatabaseId`<sup>Required</sup> <a name="AutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.autonomousContainerDatabaseId"></a>

```go
func AutonomousContainerDatabaseId() *string
```

- *Type:* *string

---

##### `ConnectionStringsType`<sup>Required</sup> <a name="ConnectionStringsType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.connectionStringsType"></a>

```go
func ConnectionStringsType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig <a name="DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomouscontainerdatabasedataguardrolechange"

&databaseautonomouscontainerdatabasedataguardrolechange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AutonomousContainerDatabaseDataguardAssociationId: *string,
	AutonomousContainerDatabaseId: *string,
	Role: *string,
	ConnectionStringsType: *string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.autonomousContainerDatabaseDataguardAssociationId">AutonomousContainerDatabaseDataguardAssociationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#autonomous_container_database_dataguard_association_id DatabaseAutonomousContainerDatabaseDataguardRoleChange#autonomous_container_database_dataguard_association_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.autonomousContainerDatabaseId">AutonomousContainerDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#autonomous_container_database_id DatabaseAutonomousContainerDatabaseDataguardRoleChange#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#role DatabaseAutonomousContainerDatabaseDataguardRoleChange#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.connectionStringsType">ConnectionStringsType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#connection_strings_type DatabaseAutonomousContainerDatabaseDataguardRoleChange#connection_strings_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#id DatabaseAutonomousContainerDatabaseDataguardRoleChange#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts">DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutonomousContainerDatabaseDataguardAssociationId`<sup>Required</sup> <a name="AutonomousContainerDatabaseDataguardAssociationId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.autonomousContainerDatabaseDataguardAssociationId"></a>

```go
AutonomousContainerDatabaseDataguardAssociationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#autonomous_container_database_dataguard_association_id DatabaseAutonomousContainerDatabaseDataguardRoleChange#autonomous_container_database_dataguard_association_id}.

---

##### `AutonomousContainerDatabaseId`<sup>Required</sup> <a name="AutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.autonomousContainerDatabaseId"></a>

```go
AutonomousContainerDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#autonomous_container_database_id DatabaseAutonomousContainerDatabaseDataguardRoleChange#autonomous_container_database_id}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#role DatabaseAutonomousContainerDatabaseDataguardRoleChange#role}.

---

##### `ConnectionStringsType`<sup>Optional</sup> <a name="ConnectionStringsType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.connectionStringsType"></a>

```go
ConnectionStringsType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#connection_strings_type DatabaseAutonomousContainerDatabaseDataguardRoleChange#connection_strings_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#id DatabaseAutonomousContainerDatabaseDataguardRoleChange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.timeouts"></a>

```go
Timeouts DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts">DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#timeouts DatabaseAutonomousContainerDatabaseDataguardRoleChange#timeouts}

---

### DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts <a name="DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomouscontainerdatabasedataguardrolechange"

&databaseautonomouscontainerdatabasedataguardrolechange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#create DatabaseAutonomousContainerDatabaseDataguardRoleChange#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#delete DatabaseAutonomousContainerDatabaseDataguardRoleChange#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#create DatabaseAutonomousContainerDatabaseDataguardRoleChange#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#delete DatabaseAutonomousContainerDatabaseDataguardRoleChange#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference <a name="DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomouscontainerdatabasedataguardrolechange"

databaseautonomouscontainerdatabasedataguardrolechange.NewDatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




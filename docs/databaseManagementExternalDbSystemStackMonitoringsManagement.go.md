# `databaseManagementExternalDbSystemStackMonitoringsManagement` Submodule <a name="`databaseManagementExternalDbSystemStackMonitoringsManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementExternalDbSystemStackMonitoringsManagement <a name="DatabaseManagementExternalDbSystemStackMonitoringsManagement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management oci_database_management_external_db_system_stack_monitorings_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementexternaldbsystemstackmonitoringsmanagement"

databasemanagementexternaldbsystemstackmonitoringsmanagement.NewDatabaseManagementExternalDbSystemStackMonitoringsManagement(scope Construct, id *string, config DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig) DatabaseManagementExternalDbSystemStackMonitoringsManagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig">DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig">DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts">DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetId"></a>

```go
func ResetId()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```

##### `ResetMetadata` <a name="ResetMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseManagementExternalDbSystemStackMonitoringsManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementexternaldbsystemstackmonitoringsmanagement"

databasemanagementexternaldbsystemstackmonitoringsmanagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementexternaldbsystemstackmonitoringsmanagement"

databasemanagementexternaldbsystemstackmonitoringsmanagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementexternaldbsystemstackmonitoringsmanagement"

databasemanagementexternaldbsystemstackmonitoringsmanagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementexternaldbsystemstackmonitoringsmanagement"

databasemanagementexternaldbsystemstackmonitoringsmanagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseManagementExternalDbSystemStackMonitoringsManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseManagementExternalDbSystemStackMonitoringsManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseManagementExternalDbSystemStackMonitoringsManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementExternalDbSystemStackMonitoringsManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference">DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.enableStackMonitoringInput">EnableStackMonitoringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.externalDbSystemIdInput">ExternalDbSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.metadataInput">MetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.enableStackMonitoring">EnableStackMonitoring</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.externalDbSystemId">ExternalDbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.timeouts"></a>

```go
func Timeouts() DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference">DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference</a>

---

##### `EnableStackMonitoringInput`<sup>Optional</sup> <a name="EnableStackMonitoringInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.enableStackMonitoringInput"></a>

```go
func EnableStackMonitoringInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalDbSystemIdInput`<sup>Optional</sup> <a name="ExternalDbSystemIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.externalDbSystemIdInput"></a>

```go
func ExternalDbSystemIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.metadataInput"></a>

```go
func MetadataInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `EnableStackMonitoring`<sup>Required</sup> <a name="EnableStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.enableStackMonitoring"></a>

```go
func EnableStackMonitoring() interface{}
```

- *Type:* interface{}

---

##### `ExternalDbSystemId`<sup>Required</sup> <a name="ExternalDbSystemId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.externalDbSystemId"></a>

```go
func ExternalDbSystemId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig <a name="DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementexternaldbsystemstackmonitoringsmanagement"

&databasemanagementexternaldbsystemstackmonitoringsmanagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EnableStackMonitoring: interface{},
	ExternalDbSystemId: *string,
	Id: *string,
	IsEnabled: interface{},
	Metadata: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.enableStackMonitoring">EnableStackMonitoring</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#enable_stack_monitoring DatabaseManagementExternalDbSystemStackMonitoringsManagement#enable_stack_monitoring}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.externalDbSystemId">ExternalDbSystemId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#external_db_system_id DatabaseManagementExternalDbSystemStackMonitoringsManagement#external_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#id DatabaseManagementExternalDbSystemStackMonitoringsManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#is_enabled DatabaseManagementExternalDbSystemStackMonitoringsManagement#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.metadata">Metadata</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#metadata DatabaseManagementExternalDbSystemStackMonitoringsManagement#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts">DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnableStackMonitoring`<sup>Required</sup> <a name="EnableStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.enableStackMonitoring"></a>

```go
EnableStackMonitoring interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#enable_stack_monitoring DatabaseManagementExternalDbSystemStackMonitoringsManagement#enable_stack_monitoring}.

---

##### `ExternalDbSystemId`<sup>Required</sup> <a name="ExternalDbSystemId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.externalDbSystemId"></a>

```go
ExternalDbSystemId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#external_db_system_id DatabaseManagementExternalDbSystemStackMonitoringsManagement#external_db_system_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#id DatabaseManagementExternalDbSystemStackMonitoringsManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#is_enabled DatabaseManagementExternalDbSystemStackMonitoringsManagement#is_enabled}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.metadata"></a>

```go
Metadata *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#metadata DatabaseManagementExternalDbSystemStackMonitoringsManagement#metadata}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementConfig.property.timeouts"></a>

```go
Timeouts DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts">DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#timeouts DatabaseManagementExternalDbSystemStackMonitoringsManagement#timeouts}

---

### DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts <a name="DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementexternaldbsystemstackmonitoringsmanagement"

&databasemanagementexternaldbsystemstackmonitoringsmanagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#create DatabaseManagementExternalDbSystemStackMonitoringsManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#delete DatabaseManagementExternalDbSystemStackMonitoringsManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#update DatabaseManagementExternalDbSystemStackMonitoringsManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#create DatabaseManagementExternalDbSystemStackMonitoringsManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#delete DatabaseManagementExternalDbSystemStackMonitoringsManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_stack_monitorings_management#update DatabaseManagementExternalDbSystemStackMonitoringsManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference <a name="DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementexternaldbsystemstackmonitoringsmanagement"

databasemanagementexternaldbsystemstackmonitoringsmanagement.NewDatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemStackMonitoringsManagement.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




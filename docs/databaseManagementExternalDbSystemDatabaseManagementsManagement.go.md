# `databaseManagementExternalDbSystemDatabaseManagementsManagement` Submodule <a name="`databaseManagementExternalDbSystemDatabaseManagementsManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementExternalDbSystemDatabaseManagementsManagement <a name="DatabaseManagementExternalDbSystemDatabaseManagementsManagement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management oci_database_management_external_db_system_database_managements_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementexternaldbsystemdatabasemanagementsmanagement"

databasemanagementexternaldbsystemdatabasemanagementsmanagement.NewDatabaseManagementExternalDbSystemDatabaseManagementsManagement(scope Construct, id *string, config DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig) DatabaseManagementExternalDbSystemDatabaseManagementsManagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig">DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig">DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.resetLicenseModel">ResetLicenseModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts">DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.resetId"></a>

```go
func ResetId()
```

##### `ResetLicenseModel` <a name="ResetLicenseModel" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.resetLicenseModel"></a>

```go
func ResetLicenseModel()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseManagementExternalDbSystemDatabaseManagementsManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementexternaldbsystemdatabasemanagementsmanagement"

databasemanagementexternaldbsystemdatabasemanagementsmanagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementexternaldbsystemdatabasemanagementsmanagement"

databasemanagementexternaldbsystemdatabasemanagementsmanagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementexternaldbsystemdatabasemanagementsmanagement"

databasemanagementexternaldbsystemdatabasemanagementsmanagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementexternaldbsystemdatabasemanagementsmanagement"

databasemanagementexternaldbsystemdatabasemanagementsmanagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseManagementExternalDbSystemDatabaseManagementsManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseManagementExternalDbSystemDatabaseManagementsManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseManagementExternalDbSystemDatabaseManagementsManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementExternalDbSystemDatabaseManagementsManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference">DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.enableDatabaseManagementInput">EnableDatabaseManagementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.externalDbSystemIdInput">ExternalDbSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.licenseModelInput">LicenseModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.enableDatabaseManagement">EnableDatabaseManagement</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.externalDbSystemId">ExternalDbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.timeouts"></a>

```go
func Timeouts() DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference">DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference</a>

---

##### `EnableDatabaseManagementInput`<sup>Optional</sup> <a name="EnableDatabaseManagementInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.enableDatabaseManagementInput"></a>

```go
func EnableDatabaseManagementInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalDbSystemIdInput`<sup>Optional</sup> <a name="ExternalDbSystemIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.externalDbSystemIdInput"></a>

```go
func ExternalDbSystemIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.licenseModelInput"></a>

```go
func LicenseModelInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `EnableDatabaseManagement`<sup>Required</sup> <a name="EnableDatabaseManagement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.enableDatabaseManagement"></a>

```go
func EnableDatabaseManagement() interface{}
```

- *Type:* interface{}

---

##### `ExternalDbSystemId`<sup>Required</sup> <a name="ExternalDbSystemId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.externalDbSystemId"></a>

```go
func ExternalDbSystemId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig <a name="DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementexternaldbsystemdatabasemanagementsmanagement"

&databasemanagementexternaldbsystemdatabasemanagementsmanagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EnableDatabaseManagement: interface{},
	ExternalDbSystemId: *string,
	Id: *string,
	LicenseModel: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.enableDatabaseManagement">EnableDatabaseManagement</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#enable_database_management DatabaseManagementExternalDbSystemDatabaseManagementsManagement#enable_database_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.externalDbSystemId">ExternalDbSystemId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#external_db_system_id DatabaseManagementExternalDbSystemDatabaseManagementsManagement#external_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#id DatabaseManagementExternalDbSystemDatabaseManagementsManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#license_model DatabaseManagementExternalDbSystemDatabaseManagementsManagement#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts">DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnableDatabaseManagement`<sup>Required</sup> <a name="EnableDatabaseManagement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.enableDatabaseManagement"></a>

```go
EnableDatabaseManagement interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#enable_database_management DatabaseManagementExternalDbSystemDatabaseManagementsManagement#enable_database_management}.

---

##### `ExternalDbSystemId`<sup>Required</sup> <a name="ExternalDbSystemId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.externalDbSystemId"></a>

```go
ExternalDbSystemId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#external_db_system_id DatabaseManagementExternalDbSystemDatabaseManagementsManagement#external_db_system_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#id DatabaseManagementExternalDbSystemDatabaseManagementsManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LicenseModel`<sup>Optional</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.licenseModel"></a>

```go
LicenseModel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#license_model DatabaseManagementExternalDbSystemDatabaseManagementsManagement#license_model}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig.property.timeouts"></a>

```go
Timeouts DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts">DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#timeouts DatabaseManagementExternalDbSystemDatabaseManagementsManagement#timeouts}

---

### DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts <a name="DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementexternaldbsystemdatabasemanagementsmanagement"

&databasemanagementexternaldbsystemdatabasemanagementsmanagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#create DatabaseManagementExternalDbSystemDatabaseManagementsManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#delete DatabaseManagementExternalDbSystemDatabaseManagementsManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#update DatabaseManagementExternalDbSystemDatabaseManagementsManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#create DatabaseManagementExternalDbSystemDatabaseManagementsManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#delete DatabaseManagementExternalDbSystemDatabaseManagementsManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_db_system_database_managements_management#update DatabaseManagementExternalDbSystemDatabaseManagementsManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference <a name="DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementexternaldbsystemdatabasemanagementsmanagement"

databasemanagementexternaldbsystemdatabasemanagementsmanagement.NewDatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalDbSystemDatabaseManagementsManagement.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




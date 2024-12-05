# `databaseExternalPluggableDatabaseOperationsInsightsManagement` Submodule <a name="`databaseExternalPluggableDatabaseOperationsInsightsManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExternalPluggableDatabaseOperationsInsightsManagement <a name="DatabaseExternalPluggableDatabaseOperationsInsightsManagement" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management oci_database_external_pluggable_database_operations_insights_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabaseoperationsinsightsmanagement"

databaseexternalpluggabledatabaseoperationsinsightsmanagement.NewDatabaseExternalPluggableDatabaseOperationsInsightsManagement(scope Construct, id *string, config DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig) DatabaseExternalPluggableDatabaseOperationsInsightsManagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig">DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig">DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseExternalPluggableDatabaseOperationsInsightsManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabaseoperationsinsightsmanagement"

databaseexternalpluggabledatabaseoperationsinsightsmanagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabaseoperationsinsightsmanagement"

databaseexternalpluggabledatabaseoperationsinsightsmanagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabaseoperationsinsightsmanagement"

databaseexternalpluggabledatabaseoperationsinsightsmanagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabaseoperationsinsightsmanagement"

databaseexternalpluggabledatabaseoperationsinsightsmanagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseExternalPluggableDatabaseOperationsInsightsManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseExternalPluggableDatabaseOperationsInsightsManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseExternalPluggableDatabaseOperationsInsightsManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExternalPluggableDatabaseOperationsInsightsManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference">DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.enableOperationsInsightsInput">EnableOperationsInsightsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.externalDatabaseConnectorIdInput">ExternalDatabaseConnectorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.externalPluggableDatabaseIdInput">ExternalPluggableDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.enableOperationsInsights">EnableOperationsInsights</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.externalDatabaseConnectorId">ExternalDatabaseConnectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.externalPluggableDatabaseId">ExternalPluggableDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.timeouts"></a>

```go
func Timeouts() DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference">DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference</a>

---

##### `EnableOperationsInsightsInput`<sup>Optional</sup> <a name="EnableOperationsInsightsInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.enableOperationsInsightsInput"></a>

```go
func EnableOperationsInsightsInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalDatabaseConnectorIdInput`<sup>Optional</sup> <a name="ExternalDatabaseConnectorIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.externalDatabaseConnectorIdInput"></a>

```go
func ExternalDatabaseConnectorIdInput() *string
```

- *Type:* *string

---

##### `ExternalPluggableDatabaseIdInput`<sup>Optional</sup> <a name="ExternalPluggableDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.externalPluggableDatabaseIdInput"></a>

```go
func ExternalPluggableDatabaseIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `EnableOperationsInsights`<sup>Required</sup> <a name="EnableOperationsInsights" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.enableOperationsInsights"></a>

```go
func EnableOperationsInsights() interface{}
```

- *Type:* interface{}

---

##### `ExternalDatabaseConnectorId`<sup>Required</sup> <a name="ExternalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.externalDatabaseConnectorId"></a>

```go
func ExternalDatabaseConnectorId() *string
```

- *Type:* *string

---

##### `ExternalPluggableDatabaseId`<sup>Required</sup> <a name="ExternalPluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.externalPluggableDatabaseId"></a>

```go
func ExternalPluggableDatabaseId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig <a name="DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabaseoperationsinsightsmanagement"

&databaseexternalpluggabledatabaseoperationsinsightsmanagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EnableOperationsInsights: interface{},
	ExternalDatabaseConnectorId: *string,
	ExternalPluggableDatabaseId: *string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.enableOperationsInsights">EnableOperationsInsights</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#enable_operations_insights DatabaseExternalPluggableDatabaseOperationsInsightsManagement#enable_operations_insights}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.externalDatabaseConnectorId">ExternalDatabaseConnectorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#external_database_connector_id DatabaseExternalPluggableDatabaseOperationsInsightsManagement#external_database_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.externalPluggableDatabaseId">ExternalPluggableDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#external_pluggable_database_id DatabaseExternalPluggableDatabaseOperationsInsightsManagement#external_pluggable_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#id DatabaseExternalPluggableDatabaseOperationsInsightsManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnableOperationsInsights`<sup>Required</sup> <a name="EnableOperationsInsights" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.enableOperationsInsights"></a>

```go
EnableOperationsInsights interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#enable_operations_insights DatabaseExternalPluggableDatabaseOperationsInsightsManagement#enable_operations_insights}.

---

##### `ExternalDatabaseConnectorId`<sup>Required</sup> <a name="ExternalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.externalDatabaseConnectorId"></a>

```go
ExternalDatabaseConnectorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#external_database_connector_id DatabaseExternalPluggableDatabaseOperationsInsightsManagement#external_database_connector_id}.

---

##### `ExternalPluggableDatabaseId`<sup>Required</sup> <a name="ExternalPluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.externalPluggableDatabaseId"></a>

```go
ExternalPluggableDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#external_pluggable_database_id DatabaseExternalPluggableDatabaseOperationsInsightsManagement#external_pluggable_database_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#id DatabaseExternalPluggableDatabaseOperationsInsightsManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.timeouts"></a>

```go
Timeouts DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#timeouts DatabaseExternalPluggableDatabaseOperationsInsightsManagement#timeouts}

---

### DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts <a name="DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabaseoperationsinsightsmanagement"

&databaseexternalpluggabledatabaseoperationsinsightsmanagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#create DatabaseExternalPluggableDatabaseOperationsInsightsManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#delete DatabaseExternalPluggableDatabaseOperationsInsightsManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#update DatabaseExternalPluggableDatabaseOperationsInsightsManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#create DatabaseExternalPluggableDatabaseOperationsInsightsManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#delete DatabaseExternalPluggableDatabaseOperationsInsightsManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#update DatabaseExternalPluggableDatabaseOperationsInsightsManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference <a name="DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabaseoperationsinsightsmanagement"

databaseexternalpluggabledatabaseoperationsinsightsmanagement.NewDatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




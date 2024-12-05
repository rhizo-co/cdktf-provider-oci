# `databaseExadataInfrastructureStorage` Submodule <a name="`databaseExadataInfrastructureStorage` Submodule" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExadataInfrastructureStorage <a name="DatabaseExadataInfrastructureStorage" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage oci_database_exadata_infrastructure_storage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexadatainfrastructurestorage"

databaseexadatainfrastructurestorage.NewDatabaseExadataInfrastructureStorage(scope Construct, id *string, config DatabaseExadataInfrastructureStorageConfig) DatabaseExadataInfrastructureStorage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig">DatabaseExadataInfrastructureStorageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig">DatabaseExadataInfrastructureStorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putContacts">PutContacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetActivationFile">ResetActivationFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetComputeCount">ResetComputeCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetContacts">ResetContacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetCorporateProxy">ResetCorporateProxy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetExadataInfrastructureId">ResetExadataInfrastructureId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetStorageCount">ResetStorageCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContacts` <a name="PutContacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putContacts"></a>

```go
func PutContacts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putContacts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putMaintenanceWindow"></a>

```go
func PutMaintenanceWindow(value DatabaseExadataInfrastructureStorageMaintenanceWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow">DatabaseExadataInfrastructureStorageMaintenanceWindow</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseExadataInfrastructureStorageTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts">DatabaseExadataInfrastructureStorageTimeouts</a>

---

##### `ResetActivationFile` <a name="ResetActivationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetActivationFile"></a>

```go
func ResetActivationFile()
```

##### `ResetComputeCount` <a name="ResetComputeCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetComputeCount"></a>

```go
func ResetComputeCount()
```

##### `ResetContacts` <a name="ResetContacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetContacts"></a>

```go
func ResetContacts()
```

##### `ResetCorporateProxy` <a name="ResetCorporateProxy" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetCorporateProxy"></a>

```go
func ResetCorporateProxy()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetExadataInfrastructureId` <a name="ResetExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetExadataInfrastructureId"></a>

```go
func ResetExadataInfrastructureId()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetId"></a>

```go
func ResetId()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetMaintenanceWindow"></a>

```go
func ResetMaintenanceWindow()
```

##### `ResetStorageCount` <a name="ResetStorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetStorageCount"></a>

```go
func ResetStorageCount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseExadataInfrastructureStorage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexadatainfrastructurestorage"

databaseexadatainfrastructurestorage.DatabaseExadataInfrastructureStorage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexadatainfrastructurestorage"

databaseexadatainfrastructurestorage.DatabaseExadataInfrastructureStorage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexadatainfrastructurestorage"

databaseexadatainfrastructurestorage.DatabaseExadataInfrastructureStorage_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexadatainfrastructurestorage"

databaseexadatainfrastructurestorage.DatabaseExadataInfrastructureStorage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseExadataInfrastructureStorage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseExadataInfrastructureStorage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseExadataInfrastructureStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExadataInfrastructureStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.activatedStorageCount">ActivatedStorageCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.additionalStorageCount">AdditionalStorageCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.contacts">Contacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList">DatabaseExadataInfrastructureStorageContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cpusEnabled">CpusEnabled</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.csiNumber">CsiNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dataStorageSizeInTbs">DataStorageSizeInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dbNodeStorageSizeInGbs">DbNodeStorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maintenanceSloStatus">MaintenanceSloStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference">DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maxCpuCount">MaxCpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maxDataStorageInTbs">MaxDataStorageInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maxDbNodeStorageInGbs">MaxDbNodeStorageInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maxMemoryInGbs">MaxMemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.memorySizeInGbs">MemorySizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference">DatabaseExadataInfrastructureStorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.activationFileInput">ActivationFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.adminNetworkCidrInput">AdminNetworkCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cloudControlPlaneServer1Input">CloudControlPlaneServer1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cloudControlPlaneServer2Input">CloudControlPlaneServer2Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.computeCountInput">ComputeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.contactsInput">ContactsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.corporateProxyInput">CorporateProxyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dnsServerInput">DnsServerInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.exadataInfrastructureIdInput">ExadataInfrastructureIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.gatewayInput">GatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.infiniBandNetworkCidrInput">InfiniBandNetworkCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow">DatabaseExadataInfrastructureStorageMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.netmaskInput">NetmaskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.ntpServerInput">NtpServerInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.shapeInput">ShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.storageCountInput">StorageCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.activationFile">ActivationFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.adminNetworkCidr">AdminNetworkCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cloudControlPlaneServer1">CloudControlPlaneServer1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cloudControlPlaneServer2">CloudControlPlaneServer2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.corporateProxy">CorporateProxy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dnsServer">DnsServer</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.exadataInfrastructureId">ExadataInfrastructureId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.gateway">Gateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.infiniBandNetworkCidr">InfiniBandNetworkCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.netmask">Netmask</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.ntpServer">NtpServer</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.storageCount">StorageCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActivatedStorageCount`<sup>Required</sup> <a name="ActivatedStorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.activatedStorageCount"></a>

```go
func ActivatedStorageCount() *f64
```

- *Type:* *f64

---

##### `AdditionalStorageCount`<sup>Required</sup> <a name="AdditionalStorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.additionalStorageCount"></a>

```go
func AdditionalStorageCount() *f64
```

- *Type:* *f64

---

##### `Contacts`<sup>Required</sup> <a name="Contacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.contacts"></a>

```go
func Contacts() DatabaseExadataInfrastructureStorageContactsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList">DatabaseExadataInfrastructureStorageContactsList</a>

---

##### `CpusEnabled`<sup>Required</sup> <a name="CpusEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cpusEnabled"></a>

```go
func CpusEnabled() *f64
```

- *Type:* *f64

---

##### `CsiNumber`<sup>Required</sup> <a name="CsiNumber" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.csiNumber"></a>

```go
func CsiNumber() *string
```

- *Type:* *string

---

##### `DataStorageSizeInTbs`<sup>Required</sup> <a name="DataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dataStorageSizeInTbs"></a>

```go
func DataStorageSizeInTbs() *f64
```

- *Type:* *f64

---

##### `DbNodeStorageSizeInGbs`<sup>Required</sup> <a name="DbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dbNodeStorageSizeInGbs"></a>

```go
func DbNodeStorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `MaintenanceSloStatus`<sup>Required</sup> <a name="MaintenanceSloStatus" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maintenanceSloStatus"></a>

```go
func MaintenanceSloStatus() *string
```

- *Type:* *string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference">DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference</a>

---

##### `MaxCpuCount`<sup>Required</sup> <a name="MaxCpuCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maxCpuCount"></a>

```go
func MaxCpuCount() *f64
```

- *Type:* *f64

---

##### `MaxDataStorageInTbs`<sup>Required</sup> <a name="MaxDataStorageInTbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maxDataStorageInTbs"></a>

```go
func MaxDataStorageInTbs() *f64
```

- *Type:* *f64

---

##### `MaxDbNodeStorageInGbs`<sup>Required</sup> <a name="MaxDbNodeStorageInGbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maxDbNodeStorageInGbs"></a>

```go
func MaxDbNodeStorageInGbs() *f64
```

- *Type:* *f64

---

##### `MaxMemoryInGbs`<sup>Required</sup> <a name="MaxMemoryInGbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maxMemoryInGbs"></a>

```go
func MaxMemoryInGbs() *f64
```

- *Type:* *f64

---

##### `MemorySizeInGbs`<sup>Required</sup> <a name="MemorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.memorySizeInGbs"></a>

```go
func MemorySizeInGbs() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeouts"></a>

```go
func Timeouts() DatabaseExadataInfrastructureStorageTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference">DatabaseExadataInfrastructureStorageTimeoutsOutputReference</a>

---

##### `ActivationFileInput`<sup>Optional</sup> <a name="ActivationFileInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.activationFileInput"></a>

```go
func ActivationFileInput() *string
```

- *Type:* *string

---

##### `AdminNetworkCidrInput`<sup>Optional</sup> <a name="AdminNetworkCidrInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.adminNetworkCidrInput"></a>

```go
func AdminNetworkCidrInput() *string
```

- *Type:* *string

---

##### `CloudControlPlaneServer1Input`<sup>Optional</sup> <a name="CloudControlPlaneServer1Input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cloudControlPlaneServer1Input"></a>

```go
func CloudControlPlaneServer1Input() *string
```

- *Type:* *string

---

##### `CloudControlPlaneServer2Input`<sup>Optional</sup> <a name="CloudControlPlaneServer2Input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cloudControlPlaneServer2Input"></a>

```go
func CloudControlPlaneServer2Input() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ComputeCountInput`<sup>Optional</sup> <a name="ComputeCountInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.computeCountInput"></a>

```go
func ComputeCountInput() *f64
```

- *Type:* *f64

---

##### `ContactsInput`<sup>Optional</sup> <a name="ContactsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.contactsInput"></a>

```go
func ContactsInput() interface{}
```

- *Type:* interface{}

---

##### `CorporateProxyInput`<sup>Optional</sup> <a name="CorporateProxyInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.corporateProxyInput"></a>

```go
func CorporateProxyInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DnsServerInput`<sup>Optional</sup> <a name="DnsServerInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dnsServerInput"></a>

```go
func DnsServerInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExadataInfrastructureIdInput`<sup>Optional</sup> <a name="ExadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.exadataInfrastructureIdInput"></a>

```go
func ExadataInfrastructureIdInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GatewayInput`<sup>Optional</sup> <a name="GatewayInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.gatewayInput"></a>

```go
func GatewayInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InfiniBandNetworkCidrInput`<sup>Optional</sup> <a name="InfiniBandNetworkCidrInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.infiniBandNetworkCidrInput"></a>

```go
func InfiniBandNetworkCidrInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maintenanceWindowInput"></a>

```go
func MaintenanceWindowInput() DatabaseExadataInfrastructureStorageMaintenanceWindow
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow">DatabaseExadataInfrastructureStorageMaintenanceWindow</a>

---

##### `NetmaskInput`<sup>Optional</sup> <a name="NetmaskInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.netmaskInput"></a>

```go
func NetmaskInput() *string
```

- *Type:* *string

---

##### `NtpServerInput`<sup>Optional</sup> <a name="NtpServerInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.ntpServerInput"></a>

```go
func NtpServerInput() *[]*string
```

- *Type:* *[]*string

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.shapeInput"></a>

```go
func ShapeInput() *string
```

- *Type:* *string

---

##### `StorageCountInput`<sup>Optional</sup> <a name="StorageCountInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.storageCountInput"></a>

```go
func StorageCountInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `ActivationFile`<sup>Required</sup> <a name="ActivationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.activationFile"></a>

```go
func ActivationFile() *string
```

- *Type:* *string

---

##### `AdminNetworkCidr`<sup>Required</sup> <a name="AdminNetworkCidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.adminNetworkCidr"></a>

```go
func AdminNetworkCidr() *string
```

- *Type:* *string

---

##### `CloudControlPlaneServer1`<sup>Required</sup> <a name="CloudControlPlaneServer1" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cloudControlPlaneServer1"></a>

```go
func CloudControlPlaneServer1() *string
```

- *Type:* *string

---

##### `CloudControlPlaneServer2`<sup>Required</sup> <a name="CloudControlPlaneServer2" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cloudControlPlaneServer2"></a>

```go
func CloudControlPlaneServer2() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.computeCount"></a>

```go
func ComputeCount() *f64
```

- *Type:* *f64

---

##### `CorporateProxy`<sup>Required</sup> <a name="CorporateProxy" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.corporateProxy"></a>

```go
func CorporateProxy() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DnsServer`<sup>Required</sup> <a name="DnsServer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dnsServer"></a>

```go
func DnsServer() *[]*string
```

- *Type:* *[]*string

---

##### `ExadataInfrastructureId`<sup>Required</sup> <a name="ExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.exadataInfrastructureId"></a>

```go
func ExadataInfrastructureId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.gateway"></a>

```go
func Gateway() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InfiniBandNetworkCidr`<sup>Required</sup> <a name="InfiniBandNetworkCidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.infiniBandNetworkCidr"></a>

```go
func InfiniBandNetworkCidr() *string
```

- *Type:* *string

---

##### `Netmask`<sup>Required</sup> <a name="Netmask" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.netmask"></a>

```go
func Netmask() *string
```

- *Type:* *string

---

##### `NtpServer`<sup>Required</sup> <a name="NtpServer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.ntpServer"></a>

```go
func NtpServer() *[]*string
```

- *Type:* *[]*string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `StorageCount`<sup>Required</sup> <a name="StorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.storageCount"></a>

```go
func StorageCount() *f64
```

- *Type:* *f64

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExadataInfrastructureStorageConfig <a name="DatabaseExadataInfrastructureStorageConfig" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexadatainfrastructurestorage"

&databaseexadatainfrastructurestorage.DatabaseExadataInfrastructureStorageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AdminNetworkCidr: *string,
	CloudControlPlaneServer1: *string,
	CloudControlPlaneServer2: *string,
	CompartmentId: *string,
	DisplayName: *string,
	DnsServer: *[]*string,
	Gateway: *string,
	InfiniBandNetworkCidr: *string,
	Netmask: *string,
	NtpServer: *[]*string,
	Shape: *string,
	TimeZone: *string,
	ActivationFile: *string,
	ComputeCount: *f64,
	Contacts: interface{},
	CorporateProxy: *string,
	DefinedTags: *map[string]*string,
	ExadataInfrastructureId: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	MaintenanceWindow: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow,
	StorageCount: *f64,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.adminNetworkCidr">AdminNetworkCidr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#admin_network_cidr DatabaseExadataInfrastructureStorage#admin_network_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.cloudControlPlaneServer1">CloudControlPlaneServer1</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#cloud_control_plane_server1 DatabaseExadataInfrastructureStorage#cloud_control_plane_server1}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.cloudControlPlaneServer2">CloudControlPlaneServer2</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#cloud_control_plane_server2 DatabaseExadataInfrastructureStorage#cloud_control_plane_server2}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#compartment_id DatabaseExadataInfrastructureStorage#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#display_name DatabaseExadataInfrastructureStorage#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.dnsServer">DnsServer</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#dns_server DatabaseExadataInfrastructureStorage#dns_server}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.gateway">Gateway</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#gateway DatabaseExadataInfrastructureStorage#gateway}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.infiniBandNetworkCidr">InfiniBandNetworkCidr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#infini_band_network_cidr DatabaseExadataInfrastructureStorage#infini_band_network_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.netmask">Netmask</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#netmask DatabaseExadataInfrastructureStorage#netmask}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.ntpServer">NtpServer</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#ntp_server DatabaseExadataInfrastructureStorage#ntp_server}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.shape">Shape</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#shape DatabaseExadataInfrastructureStorage#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.timeZone">TimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#time_zone DatabaseExadataInfrastructureStorage#time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.activationFile">ActivationFile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#activation_file DatabaseExadataInfrastructureStorage#activation_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#compute_count DatabaseExadataInfrastructureStorage#compute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.contacts">Contacts</a></code> | <code>interface{}</code> | contacts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.corporateProxy">CorporateProxy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#corporate_proxy DatabaseExadataInfrastructureStorage#corporate_proxy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#defined_tags DatabaseExadataInfrastructureStorage#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.exadataInfrastructureId">ExadataInfrastructureId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#exadata_infrastructure_id DatabaseExadataInfrastructureStorage#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#freeform_tags DatabaseExadataInfrastructureStorage#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#id DatabaseExadataInfrastructureStorage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow">DatabaseExadataInfrastructureStorageMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.storageCount">StorageCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#storage_count DatabaseExadataInfrastructureStorage#storage_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts">DatabaseExadataInfrastructureStorageTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdminNetworkCidr`<sup>Required</sup> <a name="AdminNetworkCidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.adminNetworkCidr"></a>

```go
AdminNetworkCidr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#admin_network_cidr DatabaseExadataInfrastructureStorage#admin_network_cidr}.

---

##### `CloudControlPlaneServer1`<sup>Required</sup> <a name="CloudControlPlaneServer1" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.cloudControlPlaneServer1"></a>

```go
CloudControlPlaneServer1 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#cloud_control_plane_server1 DatabaseExadataInfrastructureStorage#cloud_control_plane_server1}.

---

##### `CloudControlPlaneServer2`<sup>Required</sup> <a name="CloudControlPlaneServer2" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.cloudControlPlaneServer2"></a>

```go
CloudControlPlaneServer2 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#cloud_control_plane_server2 DatabaseExadataInfrastructureStorage#cloud_control_plane_server2}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#compartment_id DatabaseExadataInfrastructureStorage#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#display_name DatabaseExadataInfrastructureStorage#display_name}.

---

##### `DnsServer`<sup>Required</sup> <a name="DnsServer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.dnsServer"></a>

```go
DnsServer *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#dns_server DatabaseExadataInfrastructureStorage#dns_server}.

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.gateway"></a>

```go
Gateway *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#gateway DatabaseExadataInfrastructureStorage#gateway}.

---

##### `InfiniBandNetworkCidr`<sup>Required</sup> <a name="InfiniBandNetworkCidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.infiniBandNetworkCidr"></a>

```go
InfiniBandNetworkCidr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#infini_band_network_cidr DatabaseExadataInfrastructureStorage#infini_band_network_cidr}.

---

##### `Netmask`<sup>Required</sup> <a name="Netmask" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.netmask"></a>

```go
Netmask *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#netmask DatabaseExadataInfrastructureStorage#netmask}.

---

##### `NtpServer`<sup>Required</sup> <a name="NtpServer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.ntpServer"></a>

```go
NtpServer *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#ntp_server DatabaseExadataInfrastructureStorage#ntp_server}.

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.shape"></a>

```go
Shape *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#shape DatabaseExadataInfrastructureStorage#shape}.

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#time_zone DatabaseExadataInfrastructureStorage#time_zone}.

---

##### `ActivationFile`<sup>Optional</sup> <a name="ActivationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.activationFile"></a>

```go
ActivationFile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#activation_file DatabaseExadataInfrastructureStorage#activation_file}.

---

##### `ComputeCount`<sup>Optional</sup> <a name="ComputeCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.computeCount"></a>

```go
ComputeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#compute_count DatabaseExadataInfrastructureStorage#compute_count}.

---

##### `Contacts`<sup>Optional</sup> <a name="Contacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.contacts"></a>

```go
Contacts interface{}
```

- *Type:* interface{}

contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#contacts DatabaseExadataInfrastructureStorage#contacts}

---

##### `CorporateProxy`<sup>Optional</sup> <a name="CorporateProxy" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.corporateProxy"></a>

```go
CorporateProxy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#corporate_proxy DatabaseExadataInfrastructureStorage#corporate_proxy}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#defined_tags DatabaseExadataInfrastructureStorage#defined_tags}.

---

##### `ExadataInfrastructureId`<sup>Optional</sup> <a name="ExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.exadataInfrastructureId"></a>

```go
ExadataInfrastructureId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#exadata_infrastructure_id DatabaseExadataInfrastructureStorage#exadata_infrastructure_id}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#freeform_tags DatabaseExadataInfrastructureStorage#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#id DatabaseExadataInfrastructureStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.maintenanceWindow"></a>

```go
MaintenanceWindow DatabaseExadataInfrastructureStorageMaintenanceWindow
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow">DatabaseExadataInfrastructureStorageMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#maintenance_window DatabaseExadataInfrastructureStorage#maintenance_window}

---

##### `StorageCount`<sup>Optional</sup> <a name="StorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.storageCount"></a>

```go
StorageCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#storage_count DatabaseExadataInfrastructureStorage#storage_count}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.timeouts"></a>

```go
Timeouts DatabaseExadataInfrastructureStorageTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts">DatabaseExadataInfrastructureStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#timeouts DatabaseExadataInfrastructureStorage#timeouts}

---

### DatabaseExadataInfrastructureStorageContacts <a name="DatabaseExadataInfrastructureStorageContacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexadatainfrastructurestorage"

&databaseexadatainfrastructurestorage.DatabaseExadataInfrastructureStorageContacts {
	Email: *string,
	IsPrimary: interface{},
	Name: *string,
	IsContactMosValidated: interface{},
	PhoneNumber: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#email DatabaseExadataInfrastructureStorage#email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.isPrimary">IsPrimary</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#is_primary DatabaseExadataInfrastructureStorage#is_primary}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#name DatabaseExadataInfrastructureStorage#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.isContactMosValidated">IsContactMosValidated</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#is_contact_mos_validated DatabaseExadataInfrastructureStorage#is_contact_mos_validated}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#phone_number DatabaseExadataInfrastructureStorage#phone_number}. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#email DatabaseExadataInfrastructureStorage#email}.

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.isPrimary"></a>

```go
IsPrimary interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#is_primary DatabaseExadataInfrastructureStorage#is_primary}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#name DatabaseExadataInfrastructureStorage#name}.

---

##### `IsContactMosValidated`<sup>Optional</sup> <a name="IsContactMosValidated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.isContactMosValidated"></a>

```go
IsContactMosValidated interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#is_contact_mos_validated DatabaseExadataInfrastructureStorage#is_contact_mos_validated}.

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.phoneNumber"></a>

```go
PhoneNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#phone_number DatabaseExadataInfrastructureStorage#phone_number}.

---

### DatabaseExadataInfrastructureStorageMaintenanceWindow <a name="DatabaseExadataInfrastructureStorageMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexadatainfrastructurestorage"

&databaseexadatainfrastructurestorage.DatabaseExadataInfrastructureStorageMaintenanceWindow {
	Preference: *string,
	DaysOfWeek: interface{},
	HoursOfDay: *[]*f64,
	LeadTimeInWeeks: *f64,
	Months: interface{},
	WeeksOfMonth: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.preference">Preference</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#preference DatabaseExadataInfrastructureStorage#preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.daysOfWeek">DaysOfWeek</a></code> | <code>interface{}</code> | days_of_week block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.hoursOfDay">HoursOfDay</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#hours_of_day DatabaseExadataInfrastructureStorage#hours_of_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#lead_time_in_weeks DatabaseExadataInfrastructureStorage#lead_time_in_weeks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.months">Months</a></code> | <code>interface{}</code> | months block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#weeks_of_month DatabaseExadataInfrastructureStorage#weeks_of_month}. |

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.preference"></a>

```go
Preference *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#preference DatabaseExadataInfrastructureStorage#preference}.

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.daysOfWeek"></a>

```go
DaysOfWeek interface{}
```

- *Type:* interface{}

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#days_of_week DatabaseExadataInfrastructureStorage#days_of_week}

---

##### `HoursOfDay`<sup>Optional</sup> <a name="HoursOfDay" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.hoursOfDay"></a>

```go
HoursOfDay *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#hours_of_day DatabaseExadataInfrastructureStorage#hours_of_day}.

---

##### `LeadTimeInWeeks`<sup>Optional</sup> <a name="LeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.leadTimeInWeeks"></a>

```go
LeadTimeInWeeks *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#lead_time_in_weeks DatabaseExadataInfrastructureStorage#lead_time_in_weeks}.

---

##### `Months`<sup>Optional</sup> <a name="Months" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.months"></a>

```go
Months interface{}
```

- *Type:* interface{}

months block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#months DatabaseExadataInfrastructureStorage#months}

---

##### `WeeksOfMonth`<sup>Optional</sup> <a name="WeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.weeksOfMonth"></a>

```go
WeeksOfMonth *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#weeks_of_month DatabaseExadataInfrastructureStorage#weeks_of_month}.

---

### DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek <a name="DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexadatainfrastructurestorage"

&databaseexadatainfrastructurestorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#name DatabaseExadataInfrastructureStorage#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#name DatabaseExadataInfrastructureStorage#name}.

---

### DatabaseExadataInfrastructureStorageMaintenanceWindowMonths <a name="DatabaseExadataInfrastructureStorageMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexadatainfrastructurestorage"

&databaseexadatainfrastructurestorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#name DatabaseExadataInfrastructureStorage#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#name DatabaseExadataInfrastructureStorage#name}.

---

### DatabaseExadataInfrastructureStorageTimeouts <a name="DatabaseExadataInfrastructureStorageTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexadatainfrastructurestorage"

&databaseexadatainfrastructurestorage.DatabaseExadataInfrastructureStorageTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#create DatabaseExadataInfrastructureStorage#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#delete DatabaseExadataInfrastructureStorage#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#update DatabaseExadataInfrastructureStorage#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#create DatabaseExadataInfrastructureStorage#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#delete DatabaseExadataInfrastructureStorage#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#update DatabaseExadataInfrastructureStorage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExadataInfrastructureStorageContactsList <a name="DatabaseExadataInfrastructureStorageContactsList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexadatainfrastructurestorage"

databaseexadatainfrastructurestorage.NewDatabaseExadataInfrastructureStorageContactsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseExadataInfrastructureStorageContactsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.get"></a>

```go
func Get(index *f64) DatabaseExadataInfrastructureStorageContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseExadataInfrastructureStorageContactsOutputReference <a name="DatabaseExadataInfrastructureStorageContactsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexadatainfrastructurestorage"

databaseexadatainfrastructurestorage.NewDatabaseExadataInfrastructureStorageContactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseExadataInfrastructureStorageContactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.resetIsContactMosValidated">ResetIsContactMosValidated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsContactMosValidated` <a name="ResetIsContactMosValidated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.resetIsContactMosValidated"></a>

```go
func ResetIsContactMosValidated()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.resetPhoneNumber"></a>

```go
func ResetPhoneNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.isContactMosValidatedInput">IsContactMosValidatedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.isPrimaryInput">IsPrimaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.isContactMosValidated">IsContactMosValidated</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.isPrimary">IsPrimary</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `IsContactMosValidatedInput`<sup>Optional</sup> <a name="IsContactMosValidatedInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.isContactMosValidatedInput"></a>

```go
func IsContactMosValidatedInput() interface{}
```

- *Type:* interface{}

---

##### `IsPrimaryInput`<sup>Optional</sup> <a name="IsPrimaryInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.isPrimaryInput"></a>

```go
func IsPrimaryInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `IsContactMosValidated`<sup>Required</sup> <a name="IsContactMosValidated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.isContactMosValidated"></a>

```go
func IsContactMosValidated() interface{}
```

- *Type:* interface{}

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.isPrimary"></a>

```go
func IsPrimary() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList <a name="DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexadatainfrastructurestorage"

databaseexadatainfrastructurestorage.NewDatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.get"></a>

```go
func Get(index *f64) DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference <a name="DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexadatainfrastructurestorage"

databaseexadatainfrastructurestorage.NewDatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList <a name="DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexadatainfrastructurestorage"

databaseexadatainfrastructurestorage.NewDatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.get"></a>

```go
func Get(index *f64) DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference <a name="DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexadatainfrastructurestorage"

databaseexadatainfrastructurestorage.NewDatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference <a name="DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexadatainfrastructurestorage"

databaseexadatainfrastructurestorage.NewDatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.putDaysOfWeek">PutDaysOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.putMonths">PutMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetHoursOfDay">ResetHoursOfDay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetLeadTimeInWeeks">ResetLeadTimeInWeeks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetMonths">ResetMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetWeeksOfMonth">ResetWeeksOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDaysOfWeek` <a name="PutDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.putDaysOfWeek"></a>

```go
func PutDaysOfWeek(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.putDaysOfWeek.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMonths` <a name="PutMonths" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.putMonths"></a>

```go
func PutMonths(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.putMonths.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetDaysOfWeek"></a>

```go
func ResetDaysOfWeek()
```

##### `ResetHoursOfDay` <a name="ResetHoursOfDay" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetHoursOfDay"></a>

```go
func ResetHoursOfDay()
```

##### `ResetLeadTimeInWeeks` <a name="ResetLeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetLeadTimeInWeeks"></a>

```go
func ResetLeadTimeInWeeks()
```

##### `ResetMonths` <a name="ResetMonths" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetMonths"></a>

```go
func ResetMonths()
```

##### `ResetWeeksOfMonth` <a name="ResetWeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetWeeksOfMonth"></a>

```go
func ResetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList">DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.months">Months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList">DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.hoursOfDayInput">HoursOfDayInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.leadTimeInWeeksInput">LeadTimeInWeeksInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.monthsInput">MonthsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.preferenceInput">PreferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.weeksOfMonthInput">WeeksOfMonthInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.preference">Preference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow">DatabaseExadataInfrastructureStorageMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```go
func DaysOfWeek() DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList">DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList</a>

---

##### `Months`<sup>Required</sup> <a name="Months" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.months"></a>

```go
func Months() DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList">DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList</a>

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.daysOfWeekInput"></a>

```go
func DaysOfWeekInput() interface{}
```

- *Type:* interface{}

---

##### `HoursOfDayInput`<sup>Optional</sup> <a name="HoursOfDayInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.hoursOfDayInput"></a>

```go
func HoursOfDayInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `LeadTimeInWeeksInput`<sup>Optional</sup> <a name="LeadTimeInWeeksInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.leadTimeInWeeksInput"></a>

```go
func LeadTimeInWeeksInput() *f64
```

- *Type:* *f64

---

##### `MonthsInput`<sup>Optional</sup> <a name="MonthsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.monthsInput"></a>

```go
func MonthsInput() interface{}
```

- *Type:* interface{}

---

##### `PreferenceInput`<sup>Optional</sup> <a name="PreferenceInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.preferenceInput"></a>

```go
func PreferenceInput() *string
```

- *Type:* *string

---

##### `WeeksOfMonthInput`<sup>Optional</sup> <a name="WeeksOfMonthInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.weeksOfMonthInput"></a>

```go
func WeeksOfMonthInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```go
func HoursOfDay() *[]*f64
```

- *Type:* *[]*f64

---

##### `LeadTimeInWeeks`<sup>Required</sup> <a name="LeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```go
func LeadTimeInWeeks() *f64
```

- *Type:* *f64

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.preference"></a>

```go
func Preference() *string
```

- *Type:* *string

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```go
func WeeksOfMonth() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseExadataInfrastructureStorageMaintenanceWindow
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow">DatabaseExadataInfrastructureStorageMaintenanceWindow</a>

---


### DatabaseExadataInfrastructureStorageTimeoutsOutputReference <a name="DatabaseExadataInfrastructureStorageTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexadatainfrastructurestorage"

databaseexadatainfrastructurestorage.NewDatabaseExadataInfrastructureStorageTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseExadataInfrastructureStorageTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




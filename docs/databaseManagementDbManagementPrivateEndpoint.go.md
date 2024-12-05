# `databaseManagementDbManagementPrivateEndpoint` Submodule <a name="`databaseManagementDbManagementPrivateEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementDbManagementPrivateEndpoint <a name="DatabaseManagementDbManagementPrivateEndpoint" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint oci_database_management_db_management_private_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementdbmanagementprivateendpoint"

databasemanagementdbmanagementprivateendpoint.NewDatabaseManagementDbManagementPrivateEndpoint(scope Construct, id *string, config DatabaseManagementDbManagementPrivateEndpointConfig) DatabaseManagementDbManagementPrivateEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig">DatabaseManagementDbManagementPrivateEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig">DatabaseManagementDbManagementPrivateEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetIsCluster">ResetIsCluster</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetIsDnsResolutionEnabled">ResetIsDnsResolutionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseManagementDbManagementPrivateEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts">DatabaseManagementDbManagementPrivateEndpointTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetIsCluster` <a name="ResetIsCluster" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetIsCluster"></a>

```go
func ResetIsCluster()
```

##### `ResetIsDnsResolutionEnabled` <a name="ResetIsDnsResolutionEnabled" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetIsDnsResolutionEnabled"></a>

```go
func ResetIsDnsResolutionEnabled()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetNsgIds"></a>

```go
func ResetNsgIds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseManagementDbManagementPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementdbmanagementprivateendpoint"

databasemanagementdbmanagementprivateendpoint.DatabaseManagementDbManagementPrivateEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementdbmanagementprivateendpoint"

databasemanagementdbmanagementprivateendpoint.DatabaseManagementDbManagementPrivateEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementdbmanagementprivateendpoint"

databasemanagementdbmanagementprivateendpoint.DatabaseManagementDbManagementPrivateEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementdbmanagementprivateendpoint"

databasemanagementdbmanagementprivateendpoint.DatabaseManagementDbManagementPrivateEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseManagementDbManagementPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseManagementDbManagementPrivateEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseManagementDbManagementPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementDbManagementPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference">DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.vcnId">VcnId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.isClusterInput">IsClusterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.isDnsResolutionEnabledInput">IsDnsResolutionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.nsgIdsInput">NsgIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.isCluster">IsCluster</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.isDnsResolutionEnabled">IsDnsResolutionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.timeouts"></a>

```go
func Timeouts() DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference">DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference</a>

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.vcnId"></a>

```go
func VcnId() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsClusterInput`<sup>Optional</sup> <a name="IsClusterInput" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.isClusterInput"></a>

```go
func IsClusterInput() interface{}
```

- *Type:* interface{}

---

##### `IsDnsResolutionEnabledInput`<sup>Optional</sup> <a name="IsDnsResolutionEnabledInput" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.isDnsResolutionEnabledInput"></a>

```go
func IsDnsResolutionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.nsgIdsInput"></a>

```go
func NsgIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsCluster`<sup>Required</sup> <a name="IsCluster" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.isCluster"></a>

```go
func IsCluster() interface{}
```

- *Type:* interface{}

---

##### `IsDnsResolutionEnabled`<sup>Required</sup> <a name="IsDnsResolutionEnabled" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.isDnsResolutionEnabled"></a>

```go
func IsDnsResolutionEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementDbManagementPrivateEndpointConfig <a name="DatabaseManagementDbManagementPrivateEndpointConfig" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementdbmanagementprivateendpoint"

&databasemanagementdbmanagementprivateendpoint.DatabaseManagementDbManagementPrivateEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Name: *string,
	SubnetId: *string,
	DefinedTags: *map[string]*string,
	Description: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	IsCluster: interface{},
	IsDnsResolutionEnabled: interface{},
	NsgIds: *[]*string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#compartment_id DatabaseManagementDbManagementPrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#name DatabaseManagementDbManagementPrivateEndpoint#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#subnet_id DatabaseManagementDbManagementPrivateEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#defined_tags DatabaseManagementDbManagementPrivateEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#description DatabaseManagementDbManagementPrivateEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#freeform_tags DatabaseManagementDbManagementPrivateEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#id DatabaseManagementDbManagementPrivateEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.isCluster">IsCluster</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#is_cluster DatabaseManagementDbManagementPrivateEndpoint#is_cluster}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.isDnsResolutionEnabled">IsDnsResolutionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#is_dns_resolution_enabled DatabaseManagementDbManagementPrivateEndpoint#is_dns_resolution_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#nsg_ids DatabaseManagementDbManagementPrivateEndpoint#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts">DatabaseManagementDbManagementPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#compartment_id DatabaseManagementDbManagementPrivateEndpoint#compartment_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#name DatabaseManagementDbManagementPrivateEndpoint#name}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#subnet_id DatabaseManagementDbManagementPrivateEndpoint#subnet_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#defined_tags DatabaseManagementDbManagementPrivateEndpoint#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#description DatabaseManagementDbManagementPrivateEndpoint#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#freeform_tags DatabaseManagementDbManagementPrivateEndpoint#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#id DatabaseManagementDbManagementPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsCluster`<sup>Optional</sup> <a name="IsCluster" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.isCluster"></a>

```go
IsCluster interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#is_cluster DatabaseManagementDbManagementPrivateEndpoint#is_cluster}.

---

##### `IsDnsResolutionEnabled`<sup>Optional</sup> <a name="IsDnsResolutionEnabled" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.isDnsResolutionEnabled"></a>

```go
IsDnsResolutionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#is_dns_resolution_enabled DatabaseManagementDbManagementPrivateEndpoint#is_dns_resolution_enabled}.

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.nsgIds"></a>

```go
NsgIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#nsg_ids DatabaseManagementDbManagementPrivateEndpoint#nsg_ids}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.timeouts"></a>

```go
Timeouts DatabaseManagementDbManagementPrivateEndpointTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts">DatabaseManagementDbManagementPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#timeouts DatabaseManagementDbManagementPrivateEndpoint#timeouts}

---

### DatabaseManagementDbManagementPrivateEndpointTimeouts <a name="DatabaseManagementDbManagementPrivateEndpointTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementdbmanagementprivateendpoint"

&databasemanagementdbmanagementprivateendpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#create DatabaseManagementDbManagementPrivateEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#delete DatabaseManagementDbManagementPrivateEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#update DatabaseManagementDbManagementPrivateEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#create DatabaseManagementDbManagementPrivateEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#delete DatabaseManagementDbManagementPrivateEndpoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#update DatabaseManagementDbManagementPrivateEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference <a name="DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemanagementdbmanagementprivateendpoint"

databasemanagementdbmanagementprivateendpoint.NewDatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




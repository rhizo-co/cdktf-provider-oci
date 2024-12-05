# `managementDashboardManagementDashboardsImport` Submodule <a name="`managementDashboardManagementDashboardsImport` Submodule" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagementDashboardManagementDashboardsImport <a name="ManagementDashboardManagementDashboardsImport" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import oci_management_dashboard_management_dashboards_import}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/managementdashboardmanagementdashboardsimport"

managementdashboardmanagementdashboardsimport.NewManagementDashboardManagementDashboardsImport(scope Construct, id *string, config ManagementDashboardManagementDashboardsImportConfig) ManagementDashboardManagementDashboardsImport
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig">ManagementDashboardManagementDashboardsImportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig">ManagementDashboardManagementDashboardsImportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetImportDetails">ResetImportDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetImportDetailsFile">ResetImportDetailsFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.putTimeouts"></a>

```go
func PutTimeouts(value ManagementDashboardManagementDashboardsImportTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts">ManagementDashboardManagementDashboardsImportTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetId"></a>

```go
func ResetId()
```

##### `ResetImportDetails` <a name="ResetImportDetails" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetImportDetails"></a>

```go
func ResetImportDetails()
```

##### `ResetImportDetailsFile` <a name="ResetImportDetailsFile" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetImportDetailsFile"></a>

```go
func ResetImportDetailsFile()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ManagementDashboardManagementDashboardsImport resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/managementdashboardmanagementdashboardsimport"

managementdashboardmanagementdashboardsimport.ManagementDashboardManagementDashboardsImport_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/managementdashboardmanagementdashboardsimport"

managementdashboardmanagementdashboardsimport.ManagementDashboardManagementDashboardsImport_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/managementdashboardmanagementdashboardsimport"

managementdashboardmanagementdashboardsimport.ManagementDashboardManagementDashboardsImport_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/managementdashboardmanagementdashboardsimport"

managementdashboardmanagementdashboardsimport.ManagementDashboardManagementDashboardsImport_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ManagementDashboardManagementDashboardsImport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ManagementDashboardManagementDashboardsImport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ManagementDashboardManagementDashboardsImport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ManagementDashboardManagementDashboardsImport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference">ManagementDashboardManagementDashboardsImportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.importDetailsFileInput">ImportDetailsFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.importDetailsInput">ImportDetailsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.importDetails">ImportDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.importDetailsFile">ImportDetailsFile</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.timeouts"></a>

```go
func Timeouts() ManagementDashboardManagementDashboardsImportTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference">ManagementDashboardManagementDashboardsImportTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImportDetailsFileInput`<sup>Optional</sup> <a name="ImportDetailsFileInput" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.importDetailsFileInput"></a>

```go
func ImportDetailsFileInput() *string
```

- *Type:* *string

---

##### `ImportDetailsInput`<sup>Optional</sup> <a name="ImportDetailsInput" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.importDetailsInput"></a>

```go
func ImportDetailsInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImportDetails`<sup>Required</sup> <a name="ImportDetails" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.importDetails"></a>

```go
func ImportDetails() *string
```

- *Type:* *string

---

##### `ImportDetailsFile`<sup>Required</sup> <a name="ImportDetailsFile" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.importDetailsFile"></a>

```go
func ImportDetailsFile() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagementDashboardManagementDashboardsImportConfig <a name="ManagementDashboardManagementDashboardsImportConfig" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/managementdashboardmanagementdashboardsimport"

&managementdashboardmanagementdashboardsimport.ManagementDashboardManagementDashboardsImportConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	ImportDetails: *string,
	ImportDetailsFile: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#id ManagementDashboardManagementDashboardsImport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.importDetails">ImportDetails</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#import_details ManagementDashboardManagementDashboardsImport#import_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.importDetailsFile">ImportDetailsFile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#import_details_file ManagementDashboardManagementDashboardsImport#import_details_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts">ManagementDashboardManagementDashboardsImportTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#id ManagementDashboardManagementDashboardsImport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportDetails`<sup>Optional</sup> <a name="ImportDetails" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.importDetails"></a>

```go
ImportDetails *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#import_details ManagementDashboardManagementDashboardsImport#import_details}.

---

##### `ImportDetailsFile`<sup>Optional</sup> <a name="ImportDetailsFile" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.importDetailsFile"></a>

```go
ImportDetailsFile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#import_details_file ManagementDashboardManagementDashboardsImport#import_details_file}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.timeouts"></a>

```go
Timeouts ManagementDashboardManagementDashboardsImportTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts">ManagementDashboardManagementDashboardsImportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#timeouts ManagementDashboardManagementDashboardsImport#timeouts}

---

### ManagementDashboardManagementDashboardsImportTimeouts <a name="ManagementDashboardManagementDashboardsImportTimeouts" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/managementdashboardmanagementdashboardsimport"

&managementdashboardmanagementdashboardsimport.ManagementDashboardManagementDashboardsImportTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#create ManagementDashboardManagementDashboardsImport#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#delete ManagementDashboardManagementDashboardsImport#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#update ManagementDashboardManagementDashboardsImport#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#create ManagementDashboardManagementDashboardsImport#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#delete ManagementDashboardManagementDashboardsImport#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#update ManagementDashboardManagementDashboardsImport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagementDashboardManagementDashboardsImportTimeoutsOutputReference <a name="ManagementDashboardManagementDashboardsImportTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/managementdashboardmanagementdashboardsimport"

managementdashboardmanagementdashboardsimport.NewManagementDashboardManagementDashboardsImportTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagementDashboardManagementDashboardsImportTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




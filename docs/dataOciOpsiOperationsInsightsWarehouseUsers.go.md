# `dataOciOpsiOperationsInsightsWarehouseUsers` Submodule <a name="`dataOciOpsiOperationsInsightsWarehouseUsers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiOperationsInsightsWarehouseUsers <a name="DataOciOpsiOperationsInsightsWarehouseUsers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users oci_opsi_operations_insights_warehouse_users}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightswarehouseusers"

dataociopsioperationsinsightswarehouseusers.NewDataOciOpsiOperationsInsightsWarehouseUsers(scope Construct, id *string, config DataOciOpsiOperationsInsightsWarehouseUsersConfig) DataOciOpsiOperationsInsightsWarehouseUsers
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig">DataOciOpsiOperationsInsightsWarehouseUsersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig">DataOciOpsiOperationsInsightsWarehouseUsersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiOperationsInsightsWarehouseUsers resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightswarehouseusers"

dataociopsioperationsinsightswarehouseusers.DataOciOpsiOperationsInsightsWarehouseUsers_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightswarehouseusers"

dataociopsioperationsinsightswarehouseusers.DataOciOpsiOperationsInsightsWarehouseUsers_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightswarehouseusers"

dataociopsioperationsinsightswarehouseusers.DataOciOpsiOperationsInsightsWarehouseUsers_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightswarehouseusers"

dataociopsioperationsinsightswarehouseusers.DataOciOpsiOperationsInsightsWarehouseUsers_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOpsiOperationsInsightsWarehouseUsers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOpsiOperationsInsightsWarehouseUsers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOpsiOperationsInsightsWarehouseUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiOperationsInsightsWarehouseUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList">DataOciOpsiOperationsInsightsWarehouseUsersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.operationsInsightsWarehouseUserSummaryCollection">OperationsInsightsWarehouseUserSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList">DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.operationsInsightsWarehouseIdInput">OperationsInsightsWarehouseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.stateInput">StateInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.operationsInsightsWarehouseId">OperationsInsightsWarehouseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.state">State</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.filter"></a>

```go
func Filter() DataOciOpsiOperationsInsightsWarehouseUsersFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList">DataOciOpsiOperationsInsightsWarehouseUsersFilterList</a>

---

##### `OperationsInsightsWarehouseUserSummaryCollection`<sup>Required</sup> <a name="OperationsInsightsWarehouseUserSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.operationsInsightsWarehouseUserSummaryCollection"></a>

```go
func OperationsInsightsWarehouseUserSummaryCollection() DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList">DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OperationsInsightsWarehouseIdInput`<sup>Optional</sup> <a name="OperationsInsightsWarehouseIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.operationsInsightsWarehouseIdInput"></a>

```go
func OperationsInsightsWarehouseIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.stateInput"></a>

```go
func StateInput() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OperationsInsightsWarehouseId`<sup>Required</sup> <a name="OperationsInsightsWarehouseId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.operationsInsightsWarehouseId"></a>

```go
func OperationsInsightsWarehouseId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.state"></a>

```go
func State() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiOperationsInsightsWarehouseUsersConfig <a name="DataOciOpsiOperationsInsightsWarehouseUsersConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightswarehouseusers"

&dataociopsioperationsinsightswarehouseusers.DataOciOpsiOperationsInsightsWarehouseUsersConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	OperationsInsightsWarehouseId: *string,
	CompartmentId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	State: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.operationsInsightsWarehouseId">OperationsInsightsWarehouseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#operations_insights_warehouse_id DataOciOpsiOperationsInsightsWarehouseUsers#operations_insights_warehouse_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#compartment_id DataOciOpsiOperationsInsightsWarehouseUsers#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#display_name DataOciOpsiOperationsInsightsWarehouseUsers#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#id DataOciOpsiOperationsInsightsWarehouseUsers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.state">State</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#state DataOciOpsiOperationsInsightsWarehouseUsers#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OperationsInsightsWarehouseId`<sup>Required</sup> <a name="OperationsInsightsWarehouseId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.operationsInsightsWarehouseId"></a>

```go
OperationsInsightsWarehouseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#operations_insights_warehouse_id DataOciOpsiOperationsInsightsWarehouseUsers#operations_insights_warehouse_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#compartment_id DataOciOpsiOperationsInsightsWarehouseUsers#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#display_name DataOciOpsiOperationsInsightsWarehouseUsers#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#filter DataOciOpsiOperationsInsightsWarehouseUsers#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#id DataOciOpsiOperationsInsightsWarehouseUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.state"></a>

```go
State *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#state DataOciOpsiOperationsInsightsWarehouseUsers#state}.

---

### DataOciOpsiOperationsInsightsWarehouseUsersFilter <a name="DataOciOpsiOperationsInsightsWarehouseUsersFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightswarehouseusers"

&dataociopsioperationsinsightswarehouseusers.DataOciOpsiOperationsInsightsWarehouseUsersFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#name DataOciOpsiOperationsInsightsWarehouseUsers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#values DataOciOpsiOperationsInsightsWarehouseUsers#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#regex DataOciOpsiOperationsInsightsWarehouseUsers#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#name DataOciOpsiOperationsInsightsWarehouseUsers#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#values DataOciOpsiOperationsInsightsWarehouseUsers#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#regex DataOciOpsiOperationsInsightsWarehouseUsers#regex}.

---

### DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection <a name="DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightswarehouseusers"

&dataociopsioperationsinsightswarehouseusers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection {

}
```


### DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems <a name="DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightswarehouseusers"

&dataociopsioperationsinsightswarehouseusers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiOperationsInsightsWarehouseUsersFilterList <a name="DataOciOpsiOperationsInsightsWarehouseUsersFilterList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightswarehouseusers"

dataociopsioperationsinsightswarehouseusers.NewDataOciOpsiOperationsInsightsWarehouseUsersFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiOperationsInsightsWarehouseUsersFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.get"></a>

```go
func Get(index *f64) DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference <a name="DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightswarehouseusers"

dataociopsioperationsinsightswarehouseusers.NewDataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList <a name="DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightswarehouseusers"

dataociopsioperationsinsightswarehouseusers.NewDataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference <a name="DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightswarehouseusers"

dataociopsioperationsinsightswarehouseusers.NewDataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.connectionPassword">ConnectionPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.isAwrDataAccess">IsAwrDataAccess</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.isEmDataAccess">IsEmDataAccess</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.isOpsiDataAccess">IsOpsiDataAccess</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.operationsInsightsWarehouseId">OperationsInsightsWarehouseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems">DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConnectionPassword`<sup>Required</sup> <a name="ConnectionPassword" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.connectionPassword"></a>

```go
func ConnectionPassword() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsAwrDataAccess`<sup>Required</sup> <a name="IsAwrDataAccess" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.isAwrDataAccess"></a>

```go
func IsAwrDataAccess() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsEmDataAccess`<sup>Required</sup> <a name="IsEmDataAccess" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.isEmDataAccess"></a>

```go
func IsEmDataAccess() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsOpsiDataAccess`<sup>Required</sup> <a name="IsOpsiDataAccess" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.isOpsiDataAccess"></a>

```go
func IsOpsiDataAccess() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OperationsInsightsWarehouseId`<sup>Required</sup> <a name="OperationsInsightsWarehouseId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.operationsInsightsWarehouseId"></a>

```go
func OperationsInsightsWarehouseId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems">DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems</a>

---


### DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList <a name="DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightswarehouseusers"

dataociopsioperationsinsightswarehouseusers.NewDataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.get"></a>

```go
func Get(index *f64) DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference <a name="DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightswarehouseusers"

dataociopsioperationsinsightswarehouseusers.NewDataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList">DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection">DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.property.items"></a>

```go
func Items() DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList">DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection">DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection</a>

---




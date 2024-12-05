# `dataOciDatabaseManagementExternalExadataInfrastructures` Submodule <a name="`dataOciDatabaseManagementExternalExadataInfrastructures` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalExadataInfrastructures <a name="DataOciDatabaseManagementExternalExadataInfrastructures" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures oci_database_management_external_exadata_infrastructures}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatainfrastructures"

dataocidatabasemanagementexternalexadatainfrastructures.NewDataOciDatabaseManagementExternalExadataInfrastructures(scope Construct, id *string, config DataOciDatabaseManagementExternalExadataInfrastructuresConfig) DataOciDatabaseManagementExternalExadataInfrastructures
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig">DataOciDatabaseManagementExternalExadataInfrastructuresConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig">DataOciDatabaseManagementExternalExadataInfrastructuresConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataInfrastructures resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatainfrastructures"

dataocidatabasemanagementexternalexadatainfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatainfrastructures"

dataocidatabasemanagementexternalexadatainfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatainfrastructures"

dataocidatabasemanagementexternalexadatainfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatainfrastructures"

dataocidatabasemanagementexternalexadatainfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataInfrastructures resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementExternalExadataInfrastructures to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementExternalExadataInfrastructures that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalExadataInfrastructures to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.externalExadataInfrastructureCollection">ExternalExadataInfrastructureCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList">DataOciDatabaseManagementExternalExadataInfrastructuresFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ExternalExadataInfrastructureCollection`<sup>Required</sup> <a name="ExternalExadataInfrastructureCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.externalExadataInfrastructureCollection"></a>

```go
func ExternalExadataInfrastructureCollection() DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.filter"></a>

```go
func Filter() DataOciDatabaseManagementExternalExadataInfrastructuresFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList">DataOciDatabaseManagementExternalExadataInfrastructuresFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalExadataInfrastructuresConfig <a name="DataOciDatabaseManagementExternalExadataInfrastructuresConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatainfrastructures"

&dataocidatabasemanagementexternalexadatainfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#compartment_id DataOciDatabaseManagementExternalExadataInfrastructures#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#display_name DataOciDatabaseManagementExternalExadataInfrastructures#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#id DataOciDatabaseManagementExternalExadataInfrastructures#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#compartment_id DataOciDatabaseManagementExternalExadataInfrastructures#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#display_name DataOciDatabaseManagementExternalExadataInfrastructures#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#filter DataOciDatabaseManagementExternalExadataInfrastructures#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#id DataOciDatabaseManagementExternalExadataInfrastructures#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatainfrastructures"

&dataocidatabasemanagementexternalexadatainfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection {

}
```


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatainfrastructures"

&dataocidatabasemanagementexternalexadatainfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems {

}
```


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatainfrastructures"

&dataocidatabasemanagementexternalexadatainfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems {

}
```


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatainfrastructures"

&dataocidatabasemanagementexternalexadatainfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid {

}
```


### DataOciDatabaseManagementExternalExadataInfrastructuresFilter <a name="DataOciDatabaseManagementExternalExadataInfrastructuresFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatainfrastructures"

&dataocidatabasemanagementexternalexadatainfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#name DataOciDatabaseManagementExternalExadataInfrastructures#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#values DataOciDatabaseManagementExternalExadataInfrastructures#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#regex DataOciDatabaseManagementExternalExadataInfrastructures#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#name DataOciDatabaseManagementExternalExadataInfrastructures#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#values DataOciDatabaseManagementExternalExadataInfrastructures#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#regex DataOciDatabaseManagementExternalExadataInfrastructures#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatainfrastructures"

dataocidatabasemanagementexternalexadatainfrastructures.NewDataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatainfrastructures"

dataocidatabasemanagementexternalexadatainfrastructures.NewDataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.additionalDetails">AdditionalDetails</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.internalId">InternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalDetails`<sup>Required</sup> <a name="AdditionalDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.additionalDetails"></a>

```go
func AdditionalDetails() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalId`<sup>Required</sup> <a name="InternalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.internalId"></a>

```go
func InternalId() *string
```

- *Type:* *string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems</a>

---


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatainfrastructures"

dataocidatabasemanagementexternalexadatainfrastructures.NewDataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatainfrastructures"

dataocidatabasemanagementexternalexadatainfrastructures.NewDataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.additionalDetails">AdditionalDetails</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.databaseCompartments">DatabaseCompartments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.databaseSystems">DatabaseSystems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.dbSystemIds">DbSystemIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.discoveryKey">DiscoveryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.internalId">InternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.rackSize">RackSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.storageGrid">StorageGrid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.storageServerNames">StorageServerNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalDetails`<sup>Required</sup> <a name="AdditionalDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.additionalDetails"></a>

```go
func AdditionalDetails() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DatabaseCompartments`<sup>Required</sup> <a name="DatabaseCompartments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.databaseCompartments"></a>

```go
func DatabaseCompartments() *[]*string
```

- *Type:* *[]*string

---

##### `DatabaseSystems`<sup>Required</sup> <a name="DatabaseSystems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.databaseSystems"></a>

```go
func DatabaseSystems() DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList</a>

---

##### `DbSystemIds`<sup>Required</sup> <a name="DbSystemIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.dbSystemIds"></a>

```go
func DbSystemIds() *[]*string
```

- *Type:* *[]*string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DiscoveryKey`<sup>Required</sup> <a name="DiscoveryKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.discoveryKey"></a>

```go
func DiscoveryKey() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalId`<sup>Required</sup> <a name="InternalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.internalId"></a>

```go
func InternalId() *string
```

- *Type:* *string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `RackSize`<sup>Required</sup> <a name="RackSize" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.rackSize"></a>

```go
func RackSize() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StorageGrid`<sup>Required</sup> <a name="StorageGrid" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.storageGrid"></a>

```go
func StorageGrid() DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList</a>

---

##### `StorageServerNames`<sup>Required</sup> <a name="StorageServerNames" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.storageServerNames"></a>

```go
func StorageServerNames() *[]*string
```

- *Type:* *[]*string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems</a>

---


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatainfrastructures"

dataocidatabasemanagementexternalexadatainfrastructures.NewDataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatainfrastructures"

dataocidatabasemanagementexternalexadatainfrastructures.NewDataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.additionalDetails">AdditionalDetails</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.internalId">InternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.serverCount">ServerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalDetails`<sup>Required</sup> <a name="AdditionalDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.additionalDetails"></a>

```go
func AdditionalDetails() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalId`<sup>Required</sup> <a name="InternalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.internalId"></a>

```go
func InternalId() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ServerCount`<sup>Required</sup> <a name="ServerCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.serverCount"></a>

```go
func ServerCount() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid</a>

---


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatainfrastructures"

dataocidatabasemanagementexternalexadatainfrastructures.NewDataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatainfrastructures"

dataocidatabasemanagementexternalexadatainfrastructures.NewDataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection</a>

---


### DataOciDatabaseManagementExternalExadataInfrastructuresFilterList <a name="DataOciDatabaseManagementExternalExadataInfrastructuresFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatainfrastructures"

dataocidatabasemanagementexternalexadatainfrastructures.NewDataOciDatabaseManagementExternalExadataInfrastructuresFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalExadataInfrastructuresFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference <a name="DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatainfrastructures"

dataocidatabasemanagementexternalexadatainfrastructures.NewDataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




# `dataOciDatabaseManagementExternalDbHomes` Submodule <a name="`dataOciDatabaseManagementExternalDbHomes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalDbHomes <a name="DataOciDatabaseManagementExternalDbHomes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_homes oci_database_management_external_db_homes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbhomes"

dataocidatabasemanagementexternaldbhomes.NewDataOciDatabaseManagementExternalDbHomes(scope Construct, id *string, config DataOciDatabaseManagementExternalDbHomesConfig) DataOciDatabaseManagementExternalDbHomes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesConfig">DataOciDatabaseManagementExternalDbHomesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesConfig">DataOciDatabaseManagementExternalDbHomesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.resetExternalDbSystemId">ResetExternalDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetExternalDbSystemId` <a name="ResetExternalDbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.resetExternalDbSystemId"></a>

```go
func ResetExternalDbSystemId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalDbHomes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbhomes"

dataocidatabasemanagementexternaldbhomes.DataOciDatabaseManagementExternalDbHomes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbhomes"

dataocidatabasemanagementexternaldbhomes.DataOciDatabaseManagementExternalDbHomes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbhomes"

dataocidatabasemanagementexternaldbhomes.DataOciDatabaseManagementExternalDbHomes_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbhomes"

dataocidatabasemanagementexternaldbhomes.DataOciDatabaseManagementExternalDbHomes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalDbHomes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementExternalDbHomes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementExternalDbHomes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_homes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalDbHomes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.externalDbHomeCollection">ExternalDbHomeCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList">DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList">DataOciDatabaseManagementExternalDbHomesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.externalDbSystemIdInput">ExternalDbSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.externalDbSystemId">ExternalDbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ExternalDbHomeCollection`<sup>Required</sup> <a name="ExternalDbHomeCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.externalDbHomeCollection"></a>

```go
func ExternalDbHomeCollection() DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList">DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.filter"></a>

```go
func Filter() DataOciDatabaseManagementExternalDbHomesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList">DataOciDatabaseManagementExternalDbHomesFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExternalDbSystemIdInput`<sup>Optional</sup> <a name="ExternalDbSystemIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.externalDbSystemIdInput"></a>

```go
func ExternalDbSystemIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExternalDbSystemId`<sup>Required</sup> <a name="ExternalDbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.externalDbSystemId"></a>

```go
func ExternalDbSystemId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalDbHomesConfig <a name="DataOciDatabaseManagementExternalDbHomesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbhomes"

&dataocidatabasemanagementexternaldbhomes.DataOciDatabaseManagementExternalDbHomesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	ExternalDbSystemId: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_homes#compartment_id DataOciDatabaseManagementExternalDbHomes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_homes#display_name DataOciDatabaseManagementExternalDbHomes#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesConfig.property.externalDbSystemId">ExternalDbSystemId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_homes#external_db_system_id DataOciDatabaseManagementExternalDbHomes#external_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_homes#id DataOciDatabaseManagementExternalDbHomes#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_homes#compartment_id DataOciDatabaseManagementExternalDbHomes#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_homes#display_name DataOciDatabaseManagementExternalDbHomes#display_name}.

---

##### `ExternalDbSystemId`<sup>Optional</sup> <a name="ExternalDbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesConfig.property.externalDbSystemId"></a>

```go
ExternalDbSystemId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_homes#external_db_system_id DataOciDatabaseManagementExternalDbHomes#external_db_system_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_homes#filter DataOciDatabaseManagementExternalDbHomes#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_homes#id DataOciDatabaseManagementExternalDbHomes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollection <a name="DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbhomes"

&dataocidatabasemanagementexternaldbhomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollection {

}
```


### DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItems <a name="DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbhomes"

&dataocidatabasemanagementexternaldbhomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItems {

}
```


### DataOciDatabaseManagementExternalDbHomesFilter <a name="DataOciDatabaseManagementExternalDbHomesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbhomes"

&dataocidatabasemanagementexternaldbhomes.DataOciDatabaseManagementExternalDbHomesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_homes#name DataOciDatabaseManagementExternalDbHomes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_homes#values DataOciDatabaseManagementExternalDbHomes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_homes#regex DataOciDatabaseManagementExternalDbHomes#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_homes#name DataOciDatabaseManagementExternalDbHomes#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_homes#values DataOciDatabaseManagementExternalDbHomes#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_homes#regex DataOciDatabaseManagementExternalDbHomes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList <a name="DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbhomes"

dataocidatabasemanagementexternaldbhomes.NewDataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference <a name="DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbhomes"

dataocidatabasemanagementexternaldbhomes.NewDataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.additionalDetails">AdditionalDetails</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.componentName">ComponentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.externalDbHomeId">ExternalDbHomeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.externalDbSystemId">ExternalDbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.homeDirectory">HomeDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItems">DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalDetails`<sup>Required</sup> <a name="AdditionalDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.additionalDetails"></a>

```go
func AdditionalDetails() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ComponentName`<sup>Required</sup> <a name="ComponentName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.componentName"></a>

```go
func ComponentName() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExternalDbHomeId`<sup>Required</sup> <a name="ExternalDbHomeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.externalDbHomeId"></a>

```go
func ExternalDbHomeId() *string
```

- *Type:* *string

---

##### `ExternalDbSystemId`<sup>Required</sup> <a name="ExternalDbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.externalDbSystemId"></a>

```go
func ExternalDbSystemId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `HomeDirectory`<sup>Required</sup> <a name="HomeDirectory" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.homeDirectory"></a>

```go
func HomeDirectory() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItems">DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItems</a>

---


### DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList <a name="DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbhomes"

dataocidatabasemanagementexternaldbhomes.NewDataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference <a name="DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbhomes"

dataocidatabasemanagementexternaldbhomes.NewDataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList">DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollection">DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList">DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollection">DataOciDatabaseManagementExternalDbHomesExternalDbHomeCollection</a>

---


### DataOciDatabaseManagementExternalDbHomesFilterList <a name="DataOciDatabaseManagementExternalDbHomesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbhomes"

dataocidatabasemanagementexternaldbhomes.NewDataOciDatabaseManagementExternalDbHomesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalDbHomesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalDbHomesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseManagementExternalDbHomesFilterOutputReference <a name="DataOciDatabaseManagementExternalDbHomesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbhomes"

dataocidatabasemanagementexternaldbhomes.NewDataOciDatabaseManagementExternalDbHomesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalDbHomesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbHomes.DataOciDatabaseManagementExternalDbHomesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




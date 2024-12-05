# `dataOciDatabaseExascaleDbStorageVaults` Submodule <a name="`dataOciDatabaseExascaleDbStorageVaults` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseExascaleDbStorageVaults <a name="DataOciDatabaseExascaleDbStorageVaults" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults oci_database_exascale_db_storage_vaults}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexascaledbstoragevaults"

dataocidatabaseexascaledbstoragevaults.NewDataOciDatabaseExascaleDbStorageVaults(scope Construct, id *string, config DataOciDatabaseExascaleDbStorageVaultsConfig) DataOciDatabaseExascaleDbStorageVaults
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig">DataOciDatabaseExascaleDbStorageVaultsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig">DataOciDatabaseExascaleDbStorageVaultsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseExascaleDbStorageVaults resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexascaledbstoragevaults"

dataocidatabaseexascaledbstoragevaults.DataOciDatabaseExascaleDbStorageVaults_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexascaledbstoragevaults"

dataocidatabaseexascaledbstoragevaults.DataOciDatabaseExascaleDbStorageVaults_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexascaledbstoragevaults"

dataocidatabaseexascaledbstoragevaults.DataOciDatabaseExascaleDbStorageVaults_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexascaledbstoragevaults"

dataocidatabaseexascaledbstoragevaults.DataOciDatabaseExascaleDbStorageVaults_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseExascaleDbStorageVaults resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseExascaleDbStorageVaults to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseExascaleDbStorageVaults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseExascaleDbStorageVaults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.exascaleDbStorageVaults">ExascaleDbStorageVaults</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList">DataOciDatabaseExascaleDbStorageVaultsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ExascaleDbStorageVaults`<sup>Required</sup> <a name="ExascaleDbStorageVaults" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.exascaleDbStorageVaults"></a>

```go
func ExascaleDbStorageVaults() DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.filter"></a>

```go
func Filter() DataOciDatabaseExascaleDbStorageVaultsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList">DataOciDatabaseExascaleDbStorageVaultsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseExascaleDbStorageVaultsConfig <a name="DataOciDatabaseExascaleDbStorageVaultsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexascaledbstoragevaults"

&dataocidatabaseexascaledbstoragevaults.DataOciDatabaseExascaleDbStorageVaultsConfig {
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
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#compartment_id DataOciDatabaseExascaleDbStorageVaults#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#display_name DataOciDatabaseExascaleDbStorageVaults#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#id DataOciDatabaseExascaleDbStorageVaults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#state DataOciDatabaseExascaleDbStorageVaults#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#compartment_id DataOciDatabaseExascaleDbStorageVaults#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#display_name DataOciDatabaseExascaleDbStorageVaults#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#filter DataOciDatabaseExascaleDbStorageVaults#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#id DataOciDatabaseExascaleDbStorageVaults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#state DataOciDatabaseExascaleDbStorageVaults#state}.

---

### DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults <a name="DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexascaledbstoragevaults"

&dataocidatabaseexascaledbstoragevaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults {

}
```


### DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage <a name="DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexascaledbstoragevaults"

&dataocidatabaseexascaledbstoragevaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage {

}
```


### DataOciDatabaseExascaleDbStorageVaultsFilter <a name="DataOciDatabaseExascaleDbStorageVaultsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexascaledbstoragevaults"

&dataocidatabaseexascaledbstoragevaults.DataOciDatabaseExascaleDbStorageVaultsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#name DataOciDatabaseExascaleDbStorageVaults#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#values DataOciDatabaseExascaleDbStorageVaults#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#regex DataOciDatabaseExascaleDbStorageVaults#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#name DataOciDatabaseExascaleDbStorageVaults#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#values DataOciDatabaseExascaleDbStorageVaults#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#regex DataOciDatabaseExascaleDbStorageVaults#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList <a name="DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexascaledbstoragevaults"

dataocidatabaseexascaledbstoragevaults.NewDataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.get"></a>

```go
func Get(index *f64) DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference <a name="DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexascaledbstoragevaults"

dataocidatabaseexascaledbstoragevaults.NewDataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.availableSizeInGbs">AvailableSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbs">TotalSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailableSizeInGbs`<sup>Required</sup> <a name="AvailableSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.availableSizeInGbs"></a>

```go
func AvailableSizeInGbs() *f64
```

- *Type:* *f64

---

##### `TotalSizeInGbs`<sup>Required</sup> <a name="TotalSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbs"></a>

```go
func TotalSizeInGbs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage</a>

---


### DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList <a name="DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexascaledbstoragevaults"

dataocidatabaseexascaledbstoragevaults.NewDataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference <a name="DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexascaledbstoragevaults"

dataocidatabaseexascaledbstoragevaults.NewDataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.additionalFlashCacheInPercent">AdditionalFlashCacheInPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.highCapacityDatabaseStorage">HighCapacityDatabaseStorage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.vmClusterCount">VmClusterCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.vmClusterIds">VmClusterIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalFlashCacheInPercent`<sup>Required</sup> <a name="AdditionalFlashCacheInPercent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.additionalFlashCacheInPercent"></a>

```go
func AdditionalFlashCacheInPercent() *f64
```

- *Type:* *f64

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `HighCapacityDatabaseStorage`<sup>Required</sup> <a name="HighCapacityDatabaseStorage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.highCapacityDatabaseStorage"></a>

```go
func HighCapacityDatabaseStorage() DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `VmClusterCount`<sup>Required</sup> <a name="VmClusterCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.vmClusterCount"></a>

```go
func VmClusterCount() *f64
```

- *Type:* *f64

---

##### `VmClusterIds`<sup>Required</sup> <a name="VmClusterIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.vmClusterIds"></a>

```go
func VmClusterIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults</a>

---


### DataOciDatabaseExascaleDbStorageVaultsFilterList <a name="DataOciDatabaseExascaleDbStorageVaultsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexascaledbstoragevaults"

dataocidatabaseexascaledbstoragevaults.NewDataOciDatabaseExascaleDbStorageVaultsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseExascaleDbStorageVaultsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference <a name="DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexascaledbstoragevaults"

dataocidatabaseexascaledbstoragevaults.NewDataOciDatabaseExascaleDbStorageVaultsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




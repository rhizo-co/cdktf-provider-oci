# `dataOciDatabaseDbSystemStoragePerformances` Submodule <a name="`dataOciDatabaseDbSystemStoragePerformances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDbSystemStoragePerformances <a name="DataOciDatabaseDbSystemStoragePerformances" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances oci_database_db_system_storage_performances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

dataocidatabasedbsystemstorageperformances.NewDataOciDatabaseDbSystemStoragePerformances(scope Construct, id *string, config DataOciDatabaseDbSystemStoragePerformancesConfig) DataOciDatabaseDbSystemStoragePerformances
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig">DataOciDatabaseDbSystemStoragePerformancesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig">DataOciDatabaseDbSystemStoragePerformancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.resetShapeType">ResetShapeType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.resetId"></a>

```go
func ResetId()
```

##### `ResetShapeType` <a name="ResetShapeType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.resetShapeType"></a>

```go
func ResetShapeType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDbSystemStoragePerformances resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

dataocidatabasedbsystemstorageperformances.DataOciDatabaseDbSystemStoragePerformances_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

dataocidatabasedbsystemstorageperformances.DataOciDatabaseDbSystemStoragePerformances_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

dataocidatabasedbsystemstorageperformances.DataOciDatabaseDbSystemStoragePerformances_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

dataocidatabasedbsystemstorageperformances.DataOciDatabaseDbSystemStoragePerformances_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseDbSystemStoragePerformances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseDbSystemStoragePerformances to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseDbSystemStoragePerformances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDbSystemStoragePerformances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.dbSystemStoragePerformances">DbSystemStoragePerformances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList">DataOciDatabaseDbSystemStoragePerformancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.shapeTypeInput">ShapeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.storageManagementInput">StorageManagementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.shapeType">ShapeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.storageManagement">StorageManagement</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DbSystemStoragePerformances`<sup>Required</sup> <a name="DbSystemStoragePerformances" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.dbSystemStoragePerformances"></a>

```go
func DbSystemStoragePerformances() DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.filter"></a>

```go
func Filter() DataOciDatabaseDbSystemStoragePerformancesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList">DataOciDatabaseDbSystemStoragePerformancesFilterList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ShapeTypeInput`<sup>Optional</sup> <a name="ShapeTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.shapeTypeInput"></a>

```go
func ShapeTypeInput() *string
```

- *Type:* *string

---

##### `StorageManagementInput`<sup>Optional</sup> <a name="StorageManagementInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.storageManagementInput"></a>

```go
func StorageManagementInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ShapeType`<sup>Required</sup> <a name="ShapeType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.shapeType"></a>

```go
func ShapeType() *string
```

- *Type:* *string

---

##### `StorageManagement`<sup>Required</sup> <a name="StorageManagement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.storageManagement"></a>

```go
func StorageManagement() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformances.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDbSystemStoragePerformancesConfig <a name="DataOciDatabaseDbSystemStoragePerformancesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

&dataocidatabasedbsystemstorageperformances.DataOciDatabaseDbSystemStoragePerformancesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	StorageManagement: *string,
	Filter: interface{},
	Id: *string,
	ShapeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.storageManagement">StorageManagement</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#storage_management DataOciDatabaseDbSystemStoragePerformances#storage_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#id DataOciDatabaseDbSystemStoragePerformances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.shapeType">ShapeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#shape_type DataOciDatabaseDbSystemStoragePerformances#shape_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `StorageManagement`<sup>Required</sup> <a name="StorageManagement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.storageManagement"></a>

```go
StorageManagement *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#storage_management DataOciDatabaseDbSystemStoragePerformances#storage_management}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#filter DataOciDatabaseDbSystemStoragePerformances#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#id DataOciDatabaseDbSystemStoragePerformances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ShapeType`<sup>Optional</sup> <a name="ShapeType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesConfig.property.shapeType"></a>

```go
ShapeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#shape_type DataOciDatabaseDbSystemStoragePerformances#shape_type}.

---

### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

&dataocidatabasedbsystemstorageperformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances {

}
```


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

&dataocidatabasedbsystemstorageperformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance {

}
```


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

&dataocidatabasedbsystemstorageperformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance {

}
```


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

&dataocidatabasedbsystemstorageperformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct {

}
```


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

&dataocidatabasedbsystemstorageperformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance {

}
```


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

&dataocidatabasedbsystemstorageperformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance {

}
```


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

&dataocidatabasedbsystemstorageperformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct {

}
```


### DataOciDatabaseDbSystemStoragePerformancesFilter <a name="DataOciDatabaseDbSystemStoragePerformancesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

&dataocidatabasedbsystemstorageperformances.DataOciDatabaseDbSystemStoragePerformancesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#name DataOciDatabaseDbSystemStoragePerformances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#values DataOciDatabaseDbSystemStoragePerformances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#regex DataOciDatabaseDbSystemStoragePerformances#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#name DataOciDatabaseDbSystemStoragePerformances#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#values DataOciDatabaseDbSystemStoragePerformances#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_storage_performances#regex DataOciDatabaseDbSystemStoragePerformances#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

dataocidatabasedbsystemstorageperformances.NewDataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.get"></a>

```go
func Get(index *f64) DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

dataocidatabasedbsystemstorageperformances.NewDataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.diskIops">DiskIops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.diskThroughputInMbps">DiskThroughputInMbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskIops`<sup>Required</sup> <a name="DiskIops" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.diskIops"></a>

```go
func DiskIops() *f64
```

- *Type:* *f64

---

##### `DiskThroughputInMbps`<sup>Required</sup> <a name="DiskThroughputInMbps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.diskThroughputInMbps"></a>

```go
func DiskThroughputInMbps() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformance</a>

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

dataocidatabasedbsystemstorageperformances.NewDataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.get"></a>

```go
func Get(index *f64) DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

dataocidatabasedbsystemstorageperformances.NewDataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.diskIops">DiskIops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.diskThroughputInMbps">DiskThroughputInMbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskIops`<sup>Required</sup> <a name="DiskIops" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.diskIops"></a>

```go
func DiskIops() *f64
```

- *Type:* *f64

---

##### `DiskThroughputInMbps`<sup>Required</sup> <a name="DiskThroughputInMbps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.diskThroughputInMbps"></a>

```go
func DiskThroughputInMbps() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformance</a>

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

dataocidatabasedbsystemstorageperformances.NewDataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.get"></a>

```go
func Get(index *f64) DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

dataocidatabasedbsystemstorageperformances.NewDataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.balancedDiskPerformance">BalancedDiskPerformance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.highDiskPerformance">HighDiskPerformance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.sizeInGbs">SizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BalancedDiskPerformance`<sup>Required</sup> <a name="BalancedDiskPerformance" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.balancedDiskPerformance"></a>

```go
func BalancedDiskPerformance() DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListBalancedDiskPerformanceList</a>

---

##### `HighDiskPerformance`<sup>Required</sup> <a name="HighDiskPerformance" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.highDiskPerformance"></a>

```go
func HighDiskPerformance() DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListHighDiskPerformanceList</a>

---

##### `SizeInGbs`<sup>Required</sup> <a name="SizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.sizeInGbs"></a>

```go
func SizeInGbs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStruct</a>

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

dataocidatabasedbsystemstorageperformances.NewDataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.get"></a>

```go
func Get(index *f64) DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

dataocidatabasedbsystemstorageperformances.NewDataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.dataStoragePerformanceList">DataStoragePerformanceList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.recoStoragePerformanceList">RecoStoragePerformanceList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.shapeType">ShapeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataStoragePerformanceList`<sup>Required</sup> <a name="DataStoragePerformanceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.dataStoragePerformanceList"></a>

```go
func DataStoragePerformanceList() DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesDataStoragePerformanceListStructList</a>

---

##### `RecoStoragePerformanceList`<sup>Required</sup> <a name="RecoStoragePerformanceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.recoStoragePerformanceList"></a>

```go
func RecoStoragePerformanceList() DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList</a>

---

##### `ShapeType`<sup>Required</sup> <a name="ShapeType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.shapeType"></a>

```go
func ShapeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformances</a>

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

dataocidatabasedbsystemstorageperformances.NewDataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.get"></a>

```go
func Get(index *f64) DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

dataocidatabasedbsystemstorageperformances.NewDataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.diskIops">DiskIops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.diskThroughputInMbps">DiskThroughputInMbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskIops`<sup>Required</sup> <a name="DiskIops" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.diskIops"></a>

```go
func DiskIops() *f64
```

- *Type:* *f64

---

##### `DiskThroughputInMbps`<sup>Required</sup> <a name="DiskThroughputInMbps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.diskThroughputInMbps"></a>

```go
func DiskThroughputInMbps() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformance</a>

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

dataocidatabasedbsystemstorageperformances.NewDataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.get"></a>

```go
func Get(index *f64) DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

dataocidatabasedbsystemstorageperformances.NewDataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.diskIops">DiskIops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.diskThroughputInMbps">DiskThroughputInMbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskIops`<sup>Required</sup> <a name="DiskIops" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.diskIops"></a>

```go
func DiskIops() *f64
```

- *Type:* *f64

---

##### `DiskThroughputInMbps`<sup>Required</sup> <a name="DiskThroughputInMbps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.diskThroughputInMbps"></a>

```go
func DiskThroughputInMbps() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformance</a>

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

dataocidatabasedbsystemstorageperformances.NewDataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.get"></a>

```go
func Get(index *f64) DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference <a name="DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

dataocidatabasedbsystemstorageperformances.NewDataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.balancedDiskPerformance">BalancedDiskPerformance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.highDiskPerformance">HighDiskPerformance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.sizeInGbs">SizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BalancedDiskPerformance`<sup>Required</sup> <a name="BalancedDiskPerformance" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.balancedDiskPerformance"></a>

```go
func BalancedDiskPerformance() DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListBalancedDiskPerformanceList</a>

---

##### `HighDiskPerformance`<sup>Required</sup> <a name="HighDiskPerformance" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.highDiskPerformance"></a>

```go
func HighDiskPerformance() DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListHighDiskPerformanceList</a>

---

##### `SizeInGbs`<sup>Required</sup> <a name="SizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.sizeInGbs"></a>

```go
func SizeInGbs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct">DataOciDatabaseDbSystemStoragePerformancesDbSystemStoragePerformancesRecoStoragePerformanceListStruct</a>

---


### DataOciDatabaseDbSystemStoragePerformancesFilterList <a name="DataOciDatabaseDbSystemStoragePerformancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

dataocidatabasedbsystemstorageperformances.NewDataOciDatabaseDbSystemStoragePerformancesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseDbSystemStoragePerformancesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference <a name="DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemstorageperformances"

dataocidatabasedbsystemstorageperformances.NewDataOciDatabaseDbSystemStoragePerformancesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemStoragePerformances.DataOciDatabaseDbSystemStoragePerformancesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




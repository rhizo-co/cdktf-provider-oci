# `dataOciDatabaseDbSystemComputePerformances` Submodule <a name="`dataOciDatabaseDbSystemComputePerformances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDbSystemComputePerformances <a name="DataOciDatabaseDbSystemComputePerformances" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances oci_database_db_system_compute_performances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemcomputeperformances"

dataocidatabasedbsystemcomputeperformances.NewDataOciDatabaseDbSystemComputePerformances(scope Construct, id *string, config DataOciDatabaseDbSystemComputePerformancesConfig) DataOciDatabaseDbSystemComputePerformances
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig">DataOciDatabaseDbSystemComputePerformancesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig">DataOciDatabaseDbSystemComputePerformancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.resetDbSystemShape">ResetDbSystemShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDbSystemShape` <a name="ResetDbSystemShape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.resetDbSystemShape"></a>

```go
func ResetDbSystemShape()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDbSystemComputePerformances resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemcomputeperformances"

dataocidatabasedbsystemcomputeperformances.DataOciDatabaseDbSystemComputePerformances_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemcomputeperformances"

dataocidatabasedbsystemcomputeperformances.DataOciDatabaseDbSystemComputePerformances_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemcomputeperformances"

dataocidatabasedbsystemcomputeperformances.DataOciDatabaseDbSystemComputePerformances_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemcomputeperformances"

dataocidatabasedbsystemcomputeperformances.DataOciDatabaseDbSystemComputePerformances_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseDbSystemComputePerformances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseDbSystemComputePerformances to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseDbSystemComputePerformances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDbSystemComputePerformances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.dbSystemComputePerformances">DbSystemComputePerformances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList">DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList">DataOciDatabaseDbSystemComputePerformancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.dbSystemShapeInput">DbSystemShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.dbSystemShape">DbSystemShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DbSystemComputePerformances`<sup>Required</sup> <a name="DbSystemComputePerformances" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.dbSystemComputePerformances"></a>

```go
func DbSystemComputePerformances() DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList">DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.filter"></a>

```go
func Filter() DataOciDatabaseDbSystemComputePerformancesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList">DataOciDatabaseDbSystemComputePerformancesFilterList</a>

---

##### `DbSystemShapeInput`<sup>Optional</sup> <a name="DbSystemShapeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.dbSystemShapeInput"></a>

```go
func DbSystemShapeInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `DbSystemShape`<sup>Required</sup> <a name="DbSystemShape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.dbSystemShape"></a>

```go
func DbSystemShape() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformances.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDbSystemComputePerformancesConfig <a name="DataOciDatabaseDbSystemComputePerformancesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemcomputeperformances"

&dataocidatabasedbsystemcomputeperformances.DataOciDatabaseDbSystemComputePerformancesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DbSystemShape: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.dbSystemShape">DbSystemShape</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#db_system_shape DataOciDatabaseDbSystemComputePerformances#db_system_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#id DataOciDatabaseDbSystemComputePerformances#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DbSystemShape`<sup>Optional</sup> <a name="DbSystemShape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.dbSystemShape"></a>

```go
DbSystemShape *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#db_system_shape DataOciDatabaseDbSystemComputePerformances#db_system_shape}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#filter DataOciDatabaseDbSystemComputePerformances#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#id DataOciDatabaseDbSystemComputePerformances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances <a name="DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemcomputeperformances"

&dataocidatabasedbsystemcomputeperformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances {

}
```


### DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct <a name="DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemcomputeperformances"

&dataocidatabasedbsystemcomputeperformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct {

}
```


### DataOciDatabaseDbSystemComputePerformancesFilter <a name="DataOciDatabaseDbSystemComputePerformancesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemcomputeperformances"

&dataocidatabasedbsystemcomputeperformances.DataOciDatabaseDbSystemComputePerformancesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#name DataOciDatabaseDbSystemComputePerformances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#values DataOciDatabaseDbSystemComputePerformances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#regex DataOciDatabaseDbSystemComputePerformances#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#name DataOciDatabaseDbSystemComputePerformances#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#values DataOciDatabaseDbSystemComputePerformances#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_compute_performances#regex DataOciDatabaseDbSystemComputePerformances#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList <a name="DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemcomputeperformances"

dataocidatabasedbsystemcomputeperformances.NewDataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.get"></a>

```go
func Get(index *f64) DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference <a name="DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemcomputeperformances"

dataocidatabasedbsystemcomputeperformances.NewDataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.cpuCoreCount">CpuCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.networkBandwidthInGbps">NetworkBandwidthInGbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.networkIops">NetworkIops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.networkThroughputInMbps">NetworkThroughputInMbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct">DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.cpuCoreCount"></a>

```go
func CpuCoreCount() *f64
```

- *Type:* *f64

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `NetworkBandwidthInGbps`<sup>Required</sup> <a name="NetworkBandwidthInGbps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.networkBandwidthInGbps"></a>

```go
func NetworkBandwidthInGbps() *f64
```

- *Type:* *f64

---

##### `NetworkIops`<sup>Required</sup> <a name="NetworkIops" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.networkIops"></a>

```go
func NetworkIops() *f64
```

- *Type:* *f64

---

##### `NetworkThroughputInMbps`<sup>Required</sup> <a name="NetworkThroughputInMbps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.networkThroughputInMbps"></a>

```go
func NetworkThroughputInMbps() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct">DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStruct</a>

---


### DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList <a name="DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemcomputeperformances"

dataocidatabasedbsystemcomputeperformances.NewDataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.get"></a>

```go
func Get(index *f64) DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference <a name="DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemcomputeperformances"

dataocidatabasedbsystemcomputeperformances.NewDataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.computePerformanceList">ComputePerformanceList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList">DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances">DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputePerformanceList`<sup>Required</sup> <a name="ComputePerformanceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.computePerformanceList"></a>

```go
func ComputePerformanceList() DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList">DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesComputePerformanceListStructList</a>

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformancesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances">DataOciDatabaseDbSystemComputePerformancesDbSystemComputePerformances</a>

---


### DataOciDatabaseDbSystemComputePerformancesFilterList <a name="DataOciDatabaseDbSystemComputePerformancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemcomputeperformances"

dataocidatabasedbsystemcomputeperformances.NewDataOciDatabaseDbSystemComputePerformancesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseDbSystemComputePerformancesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseDbSystemComputePerformancesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseDbSystemComputePerformancesFilterOutputReference <a name="DataOciDatabaseDbSystemComputePerformancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemcomputeperformances"

dataocidatabasedbsystemcomputeperformances.NewDataOciDatabaseDbSystemComputePerformancesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseDbSystemComputePerformancesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemComputePerformances.DataOciDatabaseDbSystemComputePerformancesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




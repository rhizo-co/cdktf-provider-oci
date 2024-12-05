# `dataOciDatabaseAutonomousVmClusterAcdResourceUsages` Submodule <a name="`dataOciDatabaseAutonomousVmClusterAcdResourceUsages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousVmClusterAcdResourceUsages <a name="DataOciDatabaseAutonomousVmClusterAcdResourceUsages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages oci_database_autonomous_vm_cluster_acd_resource_usages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousvmclusteracdresourceusages"

dataocidatabaseautonomousvmclusteracdresourceusages.NewDataOciDatabaseAutonomousVmClusterAcdResourceUsages(scope Construct, id *string, config DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig) DataOciDatabaseAutonomousVmClusterAcdResourceUsages
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig">DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig">DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousVmClusterAcdResourceUsages resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousvmclusteracdresourceusages"

dataocidatabaseautonomousvmclusteracdresourceusages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousvmclusteracdresourceusages"

dataocidatabaseautonomousvmclusteracdresourceusages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousvmclusteracdresourceusages"

dataocidatabaseautonomousvmclusteracdresourceusages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousvmclusteracdresourceusages"

dataocidatabaseautonomousvmclusteracdresourceusages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousVmClusterAcdResourceUsages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseAutonomousVmClusterAcdResourceUsages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseAutonomousVmClusterAcdResourceUsages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousVmClusterAcdResourceUsages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.autonomousContainerDatabaseResourceUsages">AutonomousContainerDatabaseResourceUsages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList">DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList">DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.autonomousVmClusterIdInput">AutonomousVmClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.autonomousVmClusterId">AutonomousVmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AutonomousContainerDatabaseResourceUsages`<sup>Required</sup> <a name="AutonomousContainerDatabaseResourceUsages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.autonomousContainerDatabaseResourceUsages"></a>

```go
func AutonomousContainerDatabaseResourceUsages() DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList">DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.filter"></a>

```go
func Filter() DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList">DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList</a>

---

##### `AutonomousVmClusterIdInput`<sup>Optional</sup> <a name="AutonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.autonomousVmClusterIdInput"></a>

```go
func AutonomousVmClusterIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AutonomousVmClusterId`<sup>Required</sup> <a name="AutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.autonomousVmClusterId"></a>

```go
func AutonomousVmClusterId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsages.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages <a name="DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousvmclusteracdresourceusages"

&dataocidatabaseautonomousvmclusteracdresourceusages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages {

}
```


### DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage <a name="DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousvmclusteracdresourceusages"

&dataocidatabaseautonomousvmclusteracdresourceusages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage {

}
```


### DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig <a name="DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousvmclusteracdresourceusages"

&dataocidatabaseautonomousvmclusteracdresourceusages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AutonomousVmClusterId: *string,
	CompartmentId: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.autonomousVmClusterId">AutonomousVmClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages#autonomous_vm_cluster_id DataOciDatabaseAutonomousVmClusterAcdResourceUsages#autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages#compartment_id DataOciDatabaseAutonomousVmClusterAcdResourceUsages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages#id DataOciDatabaseAutonomousVmClusterAcdResourceUsages#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutonomousVmClusterId`<sup>Required</sup> <a name="AutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.autonomousVmClusterId"></a>

```go
AutonomousVmClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages#autonomous_vm_cluster_id DataOciDatabaseAutonomousVmClusterAcdResourceUsages#autonomous_vm_cluster_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages#compartment_id DataOciDatabaseAutonomousVmClusterAcdResourceUsages#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages#filter DataOciDatabaseAutonomousVmClusterAcdResourceUsages#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages#id DataOciDatabaseAutonomousVmClusterAcdResourceUsages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilter <a name="DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousvmclusteracdresourceusages"

&dataocidatabaseautonomousvmclusteracdresourceusages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages#name DataOciDatabaseAutonomousVmClusterAcdResourceUsages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages#values DataOciDatabaseAutonomousVmClusterAcdResourceUsages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages#regex DataOciDatabaseAutonomousVmClusterAcdResourceUsages#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages#name DataOciDatabaseAutonomousVmClusterAcdResourceUsages#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages#values DataOciDatabaseAutonomousVmClusterAcdResourceUsages#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_acd_resource_usages#regex DataOciDatabaseAutonomousVmClusterAcdResourceUsages#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList <a name="DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousvmclusteracdresourceusages"

dataocidatabaseautonomousvmclusteracdresourceusages.NewDataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference <a name="DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousvmclusteracdresourceusages"

dataocidatabaseautonomousvmclusteracdresourceusages.NewDataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.provisionedCpus">ProvisionedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.reclaimableCpus">ReclaimableCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.reservedCpus">ReservedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.usedCpus">UsedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage">DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProvisionedCpus`<sup>Required</sup> <a name="ProvisionedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.provisionedCpus"></a>

```go
func ProvisionedCpus() *f64
```

- *Type:* *f64

---

##### `ReclaimableCpus`<sup>Required</sup> <a name="ReclaimableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.reclaimableCpus"></a>

```go
func ReclaimableCpus() *f64
```

- *Type:* *f64

---

##### `ReservedCpus`<sup>Required</sup> <a name="ReservedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.reservedCpus"></a>

```go
func ReservedCpus() *f64
```

- *Type:* *f64

---

##### `UsedCpus`<sup>Required</sup> <a name="UsedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.usedCpus"></a>

```go
func UsedCpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage">DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage</a>

---


### DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList <a name="DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousvmclusteracdresourceusages"

dataocidatabaseautonomousvmclusteracdresourceusages.NewDataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference <a name="DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousvmclusteracdresourceusages"

dataocidatabaseautonomousvmclusteracdresourceusages.NewDataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.autonomousContainerDatabaseVmUsage">AutonomousContainerDatabaseVmUsage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList">DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.availableCpus">AvailableCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.largestProvisionableAutonomousDatabaseInCpus">LargestProvisionableAutonomousDatabaseInCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.provisionableCpus">ProvisionableCpus</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.provisionedCpus">ProvisionedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.reclaimableCpus">ReclaimableCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.reservedCpus">ReservedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.usedCpus">UsedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages">DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutonomousContainerDatabaseVmUsage`<sup>Required</sup> <a name="AutonomousContainerDatabaseVmUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.autonomousContainerDatabaseVmUsage"></a>

```go
func AutonomousContainerDatabaseVmUsage() DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList">DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList</a>

---

##### `AvailableCpus`<sup>Required</sup> <a name="AvailableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.availableCpus"></a>

```go
func AvailableCpus() *f64
```

- *Type:* *f64

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LargestProvisionableAutonomousDatabaseInCpus`<sup>Required</sup> <a name="LargestProvisionableAutonomousDatabaseInCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.largestProvisionableAutonomousDatabaseInCpus"></a>

```go
func LargestProvisionableAutonomousDatabaseInCpus() *f64
```

- *Type:* *f64

---

##### `ProvisionableCpus`<sup>Required</sup> <a name="ProvisionableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.provisionableCpus"></a>

```go
func ProvisionableCpus() *[]*f64
```

- *Type:* *[]*f64

---

##### `ProvisionedCpus`<sup>Required</sup> <a name="ProvisionedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.provisionedCpus"></a>

```go
func ProvisionedCpus() *f64
```

- *Type:* *f64

---

##### `ReclaimableCpus`<sup>Required</sup> <a name="ReclaimableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.reclaimableCpus"></a>

```go
func ReclaimableCpus() *f64
```

- *Type:* *f64

---

##### `ReservedCpus`<sup>Required</sup> <a name="ReservedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.reservedCpus"></a>

```go
func ReservedCpus() *f64
```

- *Type:* *f64

---

##### `UsedCpus`<sup>Required</sup> <a name="UsedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.usedCpus"></a>

```go
func UsedCpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages">DataOciDatabaseAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages</a>

---


### DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList <a name="DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousvmclusteracdresourceusages"

dataocidatabaseautonomousvmclusteracdresourceusages.NewDataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference <a name="DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousvmclusteracdresourceusages"

dataocidatabaseautonomousvmclusteracdresourceusages.NewDataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterAcdResourceUsages.DataOciDatabaseAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




# `dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations` Submodule <a name="`dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations oci_database_autonomous_container_database_dataguard_associations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomouscontainerdatabasedataguardassociations"

dataocidatabaseautonomouscontainerdatabasedataguardassociations.NewDataOciDatabaseAutonomousContainerDatabaseDataguardAssociations(scope Construct, id *string, config DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig) DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomouscontainerdatabasedataguardassociations"

dataocidatabaseautonomouscontainerdatabasedataguardassociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomouscontainerdatabasedataguardassociations"

dataocidatabaseautonomouscontainerdatabasedataguardassociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomouscontainerdatabasedataguardassociations"

dataocidatabaseautonomouscontainerdatabasedataguardassociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomouscontainerdatabasedataguardassociations"

dataocidatabaseautonomouscontainerdatabasedataguardassociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.autonomousContainerDatabaseDataguardAssociations">AutonomousContainerDatabaseDataguardAssociations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.autonomousContainerDatabaseIdInput">AutonomousContainerDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.autonomousContainerDatabaseId">AutonomousContainerDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AutonomousContainerDatabaseDataguardAssociations`<sup>Required</sup> <a name="AutonomousContainerDatabaseDataguardAssociations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.autonomousContainerDatabaseDataguardAssociations"></a>

```go
func AutonomousContainerDatabaseDataguardAssociations() DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.filter"></a>

```go
func Filter() DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList</a>

---

##### `AutonomousContainerDatabaseIdInput`<sup>Optional</sup> <a name="AutonomousContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.autonomousContainerDatabaseIdInput"></a>

```go
func AutonomousContainerDatabaseIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AutonomousContainerDatabaseId`<sup>Required</sup> <a name="AutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.autonomousContainerDatabaseId"></a>

```go
func AutonomousContainerDatabaseId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomouscontainerdatabasedataguardassociations"

&dataocidatabaseautonomouscontainerdatabasedataguardassociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations {

}
```


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomouscontainerdatabasedataguardassociations"

&dataocidatabaseautonomouscontainerdatabasedataguardassociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig {

}
```


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomouscontainerdatabasedataguardassociations"

&dataocidatabaseautonomouscontainerdatabasedataguardassociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails {

}
```


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomouscontainerdatabasedataguardassociations"

&dataocidatabaseautonomouscontainerdatabasedataguardassociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AutonomousContainerDatabaseId: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.autonomousContainerDatabaseId">AutonomousContainerDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#autonomous_container_database_id DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#id DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutonomousContainerDatabaseId`<sup>Required</sup> <a name="AutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.autonomousContainerDatabaseId"></a>

```go
AutonomousContainerDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#autonomous_container_database_id DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#autonomous_container_database_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#filter DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#id DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomouscontainerdatabasedataguardassociations"

&dataocidatabaseautonomouscontainerdatabasedataguardassociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#name DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#values DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#regex DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#name DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#values DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#regex DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomouscontainerdatabasedataguardassociations"

dataocidatabaseautonomouscontainerdatabasedataguardassociations.NewDataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomouscontainerdatabasedataguardassociations"

dataocidatabaseautonomouscontainerdatabasedataguardassociations.NewDataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.applyLag">ApplyLag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.applyRate">ApplyRate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.autonomousContainerDatabaseDataguardAssociationId">AutonomousContainerDatabaseDataguardAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.autonomousContainerDatabaseId">AutonomousContainerDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.fastStartFailOverLagLimitInSeconds">FastStartFailOverLagLimitInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.isAutomaticFailoverEnabled">IsAutomaticFailoverEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseBackupConfig">PeerAutonomousContainerDatabaseBackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseCompartmentId">PeerAutonomousContainerDatabaseCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseDataguardAssociationId">PeerAutonomousContainerDatabaseDataguardAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseDisplayName">PeerAutonomousContainerDatabaseDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseId">PeerAutonomousContainerDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousVmClusterId">PeerAutonomousVmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerCloudAutonomousVmClusterId">PeerCloudAutonomousVmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerDbUniqueName">PeerDbUniqueName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerLifecycleState">PeerLifecycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerRole">PeerRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.protectionMode">ProtectionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.standbyMaintenanceBufferInDays">StandbyMaintenanceBufferInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.timeLastRoleChanged">TimeLastRoleChanged</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.timeLastSynced">TimeLastSynced</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.transportLag">TransportLag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplyLag`<sup>Required</sup> <a name="ApplyLag" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.applyLag"></a>

```go
func ApplyLag() *string
```

- *Type:* *string

---

##### `ApplyRate`<sup>Required</sup> <a name="ApplyRate" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.applyRate"></a>

```go
func ApplyRate() *string
```

- *Type:* *string

---

##### `AutonomousContainerDatabaseDataguardAssociationId`<sup>Required</sup> <a name="AutonomousContainerDatabaseDataguardAssociationId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.autonomousContainerDatabaseDataguardAssociationId"></a>

```go
func AutonomousContainerDatabaseDataguardAssociationId() *string
```

- *Type:* *string

---

##### `AutonomousContainerDatabaseId`<sup>Required</sup> <a name="AutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.autonomousContainerDatabaseId"></a>

```go
func AutonomousContainerDatabaseId() *string
```

- *Type:* *string

---

##### `FastStartFailOverLagLimitInSeconds`<sup>Required</sup> <a name="FastStartFailOverLagLimitInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.fastStartFailOverLagLimitInSeconds"></a>

```go
func FastStartFailOverLagLimitInSeconds() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsAutomaticFailoverEnabled`<sup>Required</sup> <a name="IsAutomaticFailoverEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.isAutomaticFailoverEnabled"></a>

```go
func IsAutomaticFailoverEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `PeerAutonomousContainerDatabaseBackupConfig`<sup>Required</sup> <a name="PeerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseBackupConfig"></a>

```go
func PeerAutonomousContainerDatabaseBackupConfig() DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList</a>

---

##### `PeerAutonomousContainerDatabaseCompartmentId`<sup>Required</sup> <a name="PeerAutonomousContainerDatabaseCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseCompartmentId"></a>

```go
func PeerAutonomousContainerDatabaseCompartmentId() *string
```

- *Type:* *string

---

##### `PeerAutonomousContainerDatabaseDataguardAssociationId`<sup>Required</sup> <a name="PeerAutonomousContainerDatabaseDataguardAssociationId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseDataguardAssociationId"></a>

```go
func PeerAutonomousContainerDatabaseDataguardAssociationId() *string
```

- *Type:* *string

---

##### `PeerAutonomousContainerDatabaseDisplayName`<sup>Required</sup> <a name="PeerAutonomousContainerDatabaseDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseDisplayName"></a>

```go
func PeerAutonomousContainerDatabaseDisplayName() *string
```

- *Type:* *string

---

##### `PeerAutonomousContainerDatabaseId`<sup>Required</sup> <a name="PeerAutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseId"></a>

```go
func PeerAutonomousContainerDatabaseId() *string
```

- *Type:* *string

---

##### `PeerAutonomousVmClusterId`<sup>Required</sup> <a name="PeerAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousVmClusterId"></a>

```go
func PeerAutonomousVmClusterId() *string
```

- *Type:* *string

---

##### `PeerCloudAutonomousVmClusterId`<sup>Required</sup> <a name="PeerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerCloudAutonomousVmClusterId"></a>

```go
func PeerCloudAutonomousVmClusterId() *string
```

- *Type:* *string

---

##### `PeerDbUniqueName`<sup>Required</sup> <a name="PeerDbUniqueName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerDbUniqueName"></a>

```go
func PeerDbUniqueName() *string
```

- *Type:* *string

---

##### `PeerLifecycleState`<sup>Required</sup> <a name="PeerLifecycleState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerLifecycleState"></a>

```go
func PeerLifecycleState() *string
```

- *Type:* *string

---

##### `PeerRole`<sup>Required</sup> <a name="PeerRole" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerRole"></a>

```go
func PeerRole() *string
```

- *Type:* *string

---

##### `ProtectionMode`<sup>Required</sup> <a name="ProtectionMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.protectionMode"></a>

```go
func ProtectionMode() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `StandbyMaintenanceBufferInDays`<sup>Required</sup> <a name="StandbyMaintenanceBufferInDays" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.standbyMaintenanceBufferInDays"></a>

```go
func StandbyMaintenanceBufferInDays() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeLastRoleChanged`<sup>Required</sup> <a name="TimeLastRoleChanged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.timeLastRoleChanged"></a>

```go
func TimeLastRoleChanged() *string
```

- *Type:* *string

---

##### `TimeLastSynced`<sup>Required</sup> <a name="TimeLastSynced" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.timeLastSynced"></a>

```go
func TimeLastSynced() *string
```

- *Type:* *string

---

##### `TransportLag`<sup>Required</sup> <a name="TransportLag" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.transportLag"></a>

```go
func TransportLag() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations</a>

---


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomouscontainerdatabasedataguardassociations"

dataocidatabaseautonomouscontainerdatabasedataguardassociations.NewDataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomouscontainerdatabasedataguardassociations"

dataocidatabaseautonomouscontainerdatabasedataguardassociations.NewDataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId">DbrsPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxy">InternetProxy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPassword">VpcPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser">VpcUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbrsPolicyId`<sup>Required</sup> <a name="DbrsPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId"></a>

```go
func DbrsPolicyId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternetProxy`<sup>Required</sup> <a name="InternetProxy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxy"></a>

```go
func InternetProxy() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VpcPassword`<sup>Required</sup> <a name="VpcPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPassword"></a>

```go
func VpcPassword() *string
```

- *Type:* *string

---

##### `VpcUser`<sup>Required</sup> <a name="VpcUser" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser"></a>

```go
func VpcUser() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>

---


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomouscontainerdatabasedataguardassociations"

dataocidatabaseautonomouscontainerdatabasedataguardassociations.NewDataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomouscontainerdatabasedataguardassociations"

dataocidatabaseautonomouscontainerdatabasedataguardassociations.NewDataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetails">BackupDestinationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDays">RecoveryWindowInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupDestinationDetails`<sup>Required</sup> <a name="BackupDestinationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetails"></a>

```go
func BackupDestinationDetails() DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList</a>

---

##### `RecoveryWindowInDays`<sup>Required</sup> <a name="RecoveryWindowInDays" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDays"></a>

```go
func RecoveryWindowInDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig</a>

---


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomouscontainerdatabasedataguardassociations"

dataocidatabaseautonomouscontainerdatabasedataguardassociations.NewDataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomouscontainerdatabasedataguardassociations"

dataocidatabaseautonomouscontainerdatabasedataguardassociations.NewDataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




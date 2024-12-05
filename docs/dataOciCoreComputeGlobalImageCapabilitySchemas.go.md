# `dataOciCoreComputeGlobalImageCapabilitySchemas` Submodule <a name="`dataOciCoreComputeGlobalImageCapabilitySchemas` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreComputeGlobalImageCapabilitySchemas <a name="DataOciCoreComputeGlobalImageCapabilitySchemas" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas oci_core_compute_global_image_capability_schemas}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputeglobalimagecapabilityschemas"

dataocicorecomputeglobalimagecapabilityschemas.NewDataOciCoreComputeGlobalImageCapabilitySchemas(scope Construct, id *string, config DataOciCoreComputeGlobalImageCapabilitySchemasConfig) DataOciCoreComputeGlobalImageCapabilitySchemas
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig">DataOciCoreComputeGlobalImageCapabilitySchemasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig">DataOciCoreComputeGlobalImageCapabilitySchemasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreComputeGlobalImageCapabilitySchemas resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputeglobalimagecapabilityschemas"

dataocicorecomputeglobalimagecapabilityschemas.DataOciCoreComputeGlobalImageCapabilitySchemas_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputeglobalimagecapabilityschemas"

dataocicorecomputeglobalimagecapabilityschemas.DataOciCoreComputeGlobalImageCapabilitySchemas_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputeglobalimagecapabilityschemas"

dataocicorecomputeglobalimagecapabilityschemas.DataOciCoreComputeGlobalImageCapabilitySchemas_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputeglobalimagecapabilityschemas"

dataocicorecomputeglobalimagecapabilityschemas.DataOciCoreComputeGlobalImageCapabilitySchemas_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreComputeGlobalImageCapabilitySchemas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreComputeGlobalImageCapabilitySchemas to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreComputeGlobalImageCapabilitySchemas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreComputeGlobalImageCapabilitySchemas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.computeGlobalImageCapabilitySchemas">ComputeGlobalImageCapabilitySchemas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList">DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList">DataOciCoreComputeGlobalImageCapabilitySchemasFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ComputeGlobalImageCapabilitySchemas`<sup>Required</sup> <a name="ComputeGlobalImageCapabilitySchemas" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.computeGlobalImageCapabilitySchemas"></a>

```go
func ComputeGlobalImageCapabilitySchemas() DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList">DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.filter"></a>

```go
func Filter() DataOciCoreComputeGlobalImageCapabilitySchemasFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList">DataOciCoreComputeGlobalImageCapabilitySchemasFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemas <a name="DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemas" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemas.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputeglobalimagecapabilityschemas"

&dataocicorecomputeglobalimagecapabilityschemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemas {

}
```


### DataOciCoreComputeGlobalImageCapabilitySchemasConfig <a name="DataOciCoreComputeGlobalImageCapabilitySchemasConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputeglobalimagecapabilityschemas"

&dataocicorecomputeglobalimagecapabilityschemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig {
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas#compartment_id DataOciCoreComputeGlobalImageCapabilitySchemas#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas#display_name DataOciCoreComputeGlobalImageCapabilitySchemas#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas#id DataOciCoreComputeGlobalImageCapabilitySchemas#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas#compartment_id DataOciCoreComputeGlobalImageCapabilitySchemas#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas#display_name DataOciCoreComputeGlobalImageCapabilitySchemas#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas#filter DataOciCoreComputeGlobalImageCapabilitySchemas#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas#id DataOciCoreComputeGlobalImageCapabilitySchemas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreComputeGlobalImageCapabilitySchemasFilter <a name="DataOciCoreComputeGlobalImageCapabilitySchemasFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputeglobalimagecapabilityschemas"

&dataocicorecomputeglobalimagecapabilityschemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas#name DataOciCoreComputeGlobalImageCapabilitySchemas#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas#values DataOciCoreComputeGlobalImageCapabilitySchemas#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas#regex DataOciCoreComputeGlobalImageCapabilitySchemas#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas#name DataOciCoreComputeGlobalImageCapabilitySchemas#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas#values DataOciCoreComputeGlobalImageCapabilitySchemas#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas#regex DataOciCoreComputeGlobalImageCapabilitySchemas#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList <a name="DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputeglobalimagecapabilityschemas"

dataocicorecomputeglobalimagecapabilityschemas.NewDataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.get"></a>

```go
func Get(index *f64) DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference <a name="DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputeglobalimagecapabilityschemas"

dataocicorecomputeglobalimagecapabilityschemas.NewDataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.currentVersionName">CurrentVersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemas">DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CurrentVersionName`<sup>Required</sup> <a name="CurrentVersionName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.currentVersionName"></a>

```go
func CurrentVersionName() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemas
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemas">DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemas</a>

---


### DataOciCoreComputeGlobalImageCapabilitySchemasFilterList <a name="DataOciCoreComputeGlobalImageCapabilitySchemasFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputeglobalimagecapabilityschemas"

dataocicorecomputeglobalimagecapabilityschemas.NewDataOciCoreComputeGlobalImageCapabilitySchemasFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreComputeGlobalImageCapabilitySchemasFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.get"></a>

```go
func Get(index *f64) DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference <a name="DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputeglobalimagecapabilityschemas"

dataocicorecomputeglobalimagecapabilityschemas.NewDataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




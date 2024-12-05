# `dataOciCoreComputeImageCapabilitySchemas` Submodule <a name="`dataOciCoreComputeImageCapabilitySchemas` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreComputeImageCapabilitySchemas <a name="DataOciCoreComputeImageCapabilitySchemas" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas oci_core_compute_image_capability_schemas}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputeimagecapabilityschemas"

dataocicorecomputeimagecapabilityschemas.NewDataOciCoreComputeImageCapabilitySchemas(scope Construct, id *string, config DataOciCoreComputeImageCapabilitySchemasConfig) DataOciCoreComputeImageCapabilitySchemas
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig">DataOciCoreComputeImageCapabilitySchemasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig">DataOciCoreComputeImageCapabilitySchemasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.resetImageId">ResetImageId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.resetId"></a>

```go
func ResetId()
```

##### `ResetImageId` <a name="ResetImageId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.resetImageId"></a>

```go
func ResetImageId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreComputeImageCapabilitySchemas resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputeimagecapabilityschemas"

dataocicorecomputeimagecapabilityschemas.DataOciCoreComputeImageCapabilitySchemas_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputeimagecapabilityschemas"

dataocicorecomputeimagecapabilityschemas.DataOciCoreComputeImageCapabilitySchemas_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputeimagecapabilityschemas"

dataocicorecomputeimagecapabilityschemas.DataOciCoreComputeImageCapabilitySchemas_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputeimagecapabilityschemas"

dataocicorecomputeimagecapabilityschemas.DataOciCoreComputeImageCapabilitySchemas_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreComputeImageCapabilitySchemas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreComputeImageCapabilitySchemas to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreComputeImageCapabilitySchemas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreComputeImageCapabilitySchemas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.computeImageCapabilitySchemas">ComputeImageCapabilitySchemas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList">DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList">DataOciCoreComputeImageCapabilitySchemasFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.imageIdInput">ImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ComputeImageCapabilitySchemas`<sup>Required</sup> <a name="ComputeImageCapabilitySchemas" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.computeImageCapabilitySchemas"></a>

```go
func ComputeImageCapabilitySchemas() DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList">DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.filter"></a>

```go
func Filter() DataOciCoreComputeImageCapabilitySchemasFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList">DataOciCoreComputeImageCapabilitySchemasFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.imageIdInput"></a>

```go
func ImageIdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemas <a name="DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemas" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemas.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputeimagecapabilityschemas"

&dataocicorecomputeimagecapabilityschemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemas {

}
```


### DataOciCoreComputeImageCapabilitySchemasConfig <a name="DataOciCoreComputeImageCapabilitySchemasConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputeimagecapabilityschemas"

&dataocicorecomputeimagecapabilityschemas.DataOciCoreComputeImageCapabilitySchemasConfig {
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
	ImageId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#compartment_id DataOciCoreComputeImageCapabilitySchemas#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#display_name DataOciCoreComputeImageCapabilitySchemas#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#id DataOciCoreComputeImageCapabilitySchemas#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.imageId">ImageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#image_id DataOciCoreComputeImageCapabilitySchemas#image_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#compartment_id DataOciCoreComputeImageCapabilitySchemas#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#display_name DataOciCoreComputeImageCapabilitySchemas#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#filter DataOciCoreComputeImageCapabilitySchemas#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#id DataOciCoreComputeImageCapabilitySchemas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageId`<sup>Optional</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.imageId"></a>

```go
ImageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#image_id DataOciCoreComputeImageCapabilitySchemas#image_id}.

---

### DataOciCoreComputeImageCapabilitySchemasFilter <a name="DataOciCoreComputeImageCapabilitySchemasFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputeimagecapabilityschemas"

&dataocicorecomputeimagecapabilityschemas.DataOciCoreComputeImageCapabilitySchemasFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#name DataOciCoreComputeImageCapabilitySchemas#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#values DataOciCoreComputeImageCapabilitySchemas#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#regex DataOciCoreComputeImageCapabilitySchemas#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#name DataOciCoreComputeImageCapabilitySchemas#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#values DataOciCoreComputeImageCapabilitySchemas#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#regex DataOciCoreComputeImageCapabilitySchemas#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList <a name="DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputeimagecapabilityschemas"

dataocicorecomputeimagecapabilityschemas.NewDataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.get"></a>

```go
func Get(index *f64) DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference <a name="DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputeimagecapabilityschemas"

dataocicorecomputeimagecapabilityschemas.NewDataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.computeGlobalImageCapabilitySchemaId">ComputeGlobalImageCapabilitySchemaId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.computeGlobalImageCapabilitySchemaVersionName">ComputeGlobalImageCapabilitySchemaVersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.schemaData">SchemaData</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemas">DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ComputeGlobalImageCapabilitySchemaId`<sup>Required</sup> <a name="ComputeGlobalImageCapabilitySchemaId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.computeGlobalImageCapabilitySchemaId"></a>

```go
func ComputeGlobalImageCapabilitySchemaId() *string
```

- *Type:* *string

---

##### `ComputeGlobalImageCapabilitySchemaVersionName`<sup>Required</sup> <a name="ComputeGlobalImageCapabilitySchemaVersionName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.computeGlobalImageCapabilitySchemaVersionName"></a>

```go
func ComputeGlobalImageCapabilitySchemaVersionName() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `SchemaData`<sup>Required</sup> <a name="SchemaData" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.schemaData"></a>

```go
func SchemaData() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemas
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemas">DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemas</a>

---


### DataOciCoreComputeImageCapabilitySchemasFilterList <a name="DataOciCoreComputeImageCapabilitySchemasFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputeimagecapabilityschemas"

dataocicorecomputeimagecapabilityschemas.NewDataOciCoreComputeImageCapabilitySchemasFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreComputeImageCapabilitySchemasFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.get"></a>

```go
func Get(index *f64) DataOciCoreComputeImageCapabilitySchemasFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreComputeImageCapabilitySchemasFilterOutputReference <a name="DataOciCoreComputeImageCapabilitySchemasFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputeimagecapabilityschemas"

dataocicorecomputeimagecapabilityschemas.NewDataOciCoreComputeImageCapabilitySchemasFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreComputeImageCapabilitySchemasFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




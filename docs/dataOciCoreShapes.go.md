# `dataOciCoreShapes` Submodule <a name="`dataOciCoreShapes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreShapes <a name="DataOciCoreShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes oci_core_shapes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapes(scope Construct, id *string, config DataOciCoreShapesConfig) DataOciCoreShapes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig">DataOciCoreShapesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig">DataOciCoreShapesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetImageId">ResetImageId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetAvailabilityDomain"></a>

```go
func ResetAvailabilityDomain()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetId"></a>

```go
func ResetId()
```

##### `ResetImageId` <a name="ResetImageId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetImageId"></a>

```go
func ResetImageId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreShapes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.DataOciCoreShapes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.DataOciCoreShapes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.DataOciCoreShapes_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.DataOciCoreShapes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreShapes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreShapes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList">DataOciCoreShapesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.shapes">Shapes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList">DataOciCoreShapesShapesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.imageIdInput">ImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.filter"></a>

```go
func Filter() DataOciCoreShapesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList">DataOciCoreShapesFilterList</a>

---

##### `Shapes`<sup>Required</sup> <a name="Shapes" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.shapes"></a>

```go
func Shapes() DataOciCoreShapesShapesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList">DataOciCoreShapesShapesList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.imageIdInput"></a>

```go
func ImageIdInput() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreShapesConfig <a name="DataOciCoreShapesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

&dataocicoreshapes.DataOciCoreShapesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	AvailabilityDomain: *string,
	Filter: interface{},
	Id: *string,
	ImageId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#compartment_id DataOciCoreShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#availability_domain DataOciCoreShapes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#id DataOciCoreShapes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.imageId">ImageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#image_id DataOciCoreShapes#image_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#compartment_id DataOciCoreShapes#compartment_id}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#availability_domain DataOciCoreShapes#availability_domain}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#filter DataOciCoreShapes#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#id DataOciCoreShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageId`<sup>Optional</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.imageId"></a>

```go
ImageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#image_id DataOciCoreShapes#image_id}.

---

### DataOciCoreShapesFilter <a name="DataOciCoreShapesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

&dataocicoreshapes.DataOciCoreShapesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#name DataOciCoreShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#values DataOciCoreShapes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#regex DataOciCoreShapes#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#name DataOciCoreShapes#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#values DataOciCoreShapes#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#regex DataOciCoreShapes#regex}.

---

### DataOciCoreShapesShapes <a name="DataOciCoreShapesShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

&dataocicoreshapes.DataOciCoreShapesShapes {

}
```


### DataOciCoreShapesShapesMaxVnicAttachmentOptions <a name="DataOciCoreShapesShapesMaxVnicAttachmentOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

&dataocicoreshapes.DataOciCoreShapesShapesMaxVnicAttachmentOptions {

}
```


### DataOciCoreShapesShapesMemoryOptions <a name="DataOciCoreShapesShapesMemoryOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

&dataocicoreshapes.DataOciCoreShapesShapesMemoryOptions {

}
```


### DataOciCoreShapesShapesNetworkingBandwidthOptions <a name="DataOciCoreShapesShapesNetworkingBandwidthOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

&dataocicoreshapes.DataOciCoreShapesShapesNetworkingBandwidthOptions {

}
```


### DataOciCoreShapesShapesOcpuOptions <a name="DataOciCoreShapesShapesOcpuOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

&dataocicoreshapes.DataOciCoreShapesShapesOcpuOptions {

}
```


### DataOciCoreShapesShapesPlatformConfigOptions <a name="DataOciCoreShapesShapesPlatformConfigOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

&dataocicoreshapes.DataOciCoreShapesShapesPlatformConfigOptions {

}
```


### DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

&dataocicoreshapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions {

}
```


### DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

&dataocicoreshapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions {

}
```


### DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

&dataocicoreshapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions {

}
```


### DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

&dataocicoreshapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions {

}
```


### DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

&dataocicoreshapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions {

}
```


### DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

&dataocicoreshapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions {

}
```


### DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

&dataocicoreshapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions {

}
```


### DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

&dataocicoreshapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions {

}
```


### DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

&dataocicoreshapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions {

}
```


### DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

&dataocicoreshapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions {

}
```


### DataOciCoreShapesShapesRecommendedAlternatives <a name="DataOciCoreShapesShapesRecommendedAlternatives" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternatives"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternatives.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

&dataocicoreshapes.DataOciCoreShapesShapesRecommendedAlternatives {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreShapesFilterList <a name="DataOciCoreShapesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreShapesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.get"></a>

```go
func Get(index *f64) DataOciCoreShapesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreShapesFilterOutputReference <a name="DataOciCoreShapesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreShapesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreShapesShapesList <a name="DataOciCoreShapesShapesList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreShapesShapesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.get"></a>

```go
func Get(index *f64) DataOciCoreShapesShapesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreShapesShapesMaxVnicAttachmentOptionsList <a name="DataOciCoreShapesShapesMaxVnicAttachmentOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesMaxVnicAttachmentOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreShapesShapesMaxVnicAttachmentOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference <a name="DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.defaultPerOcpu">DefaultPerOcpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptions">DataOciCoreShapesShapesMaxVnicAttachmentOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultPerOcpu`<sup>Required</sup> <a name="DefaultPerOcpu" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.defaultPerOcpu"></a>

```go
func DefaultPerOcpu() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreShapesShapesMaxVnicAttachmentOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptions">DataOciCoreShapesShapesMaxVnicAttachmentOptions</a>

---


### DataOciCoreShapesShapesMemoryOptionsList <a name="DataOciCoreShapesShapesMemoryOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesMemoryOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreShapesShapesMemoryOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreShapesShapesMemoryOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreShapesShapesMemoryOptionsOutputReference <a name="DataOciCoreShapesShapesMemoryOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesMemoryOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreShapesShapesMemoryOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.defaultPerOcpuInGbs">DefaultPerOcpuInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.maxInGbs">MaxInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.maxPerNumaNodeInGbs">MaxPerNumaNodeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.maxPerOcpuInGbs">MaxPerOcpuInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.minInGbs">MinInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.minPerOcpuInGbs">MinPerOcpuInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptions">DataOciCoreShapesShapesMemoryOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultPerOcpuInGbs`<sup>Required</sup> <a name="DefaultPerOcpuInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.defaultPerOcpuInGbs"></a>

```go
func DefaultPerOcpuInGbs() *f64
```

- *Type:* *f64

---

##### `MaxInGbs`<sup>Required</sup> <a name="MaxInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.maxInGbs"></a>

```go
func MaxInGbs() *f64
```

- *Type:* *f64

---

##### `MaxPerNumaNodeInGbs`<sup>Required</sup> <a name="MaxPerNumaNodeInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.maxPerNumaNodeInGbs"></a>

```go
func MaxPerNumaNodeInGbs() *f64
```

- *Type:* *f64

---

##### `MaxPerOcpuInGbs`<sup>Required</sup> <a name="MaxPerOcpuInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.maxPerOcpuInGbs"></a>

```go
func MaxPerOcpuInGbs() *f64
```

- *Type:* *f64

---

##### `MinInGbs`<sup>Required</sup> <a name="MinInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.minInGbs"></a>

```go
func MinInGbs() *f64
```

- *Type:* *f64

---

##### `MinPerOcpuInGbs`<sup>Required</sup> <a name="MinPerOcpuInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.minPerOcpuInGbs"></a>

```go
func MinPerOcpuInGbs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreShapesShapesMemoryOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptions">DataOciCoreShapesShapesMemoryOptions</a>

---


### DataOciCoreShapesShapesNetworkingBandwidthOptionsList <a name="DataOciCoreShapesShapesNetworkingBandwidthOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesNetworkingBandwidthOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreShapesShapesNetworkingBandwidthOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference <a name="DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.defaultPerOcpuInGbps">DefaultPerOcpuInGbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.maxInGbps">MaxInGbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.minInGbps">MinInGbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptions">DataOciCoreShapesShapesNetworkingBandwidthOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultPerOcpuInGbps`<sup>Required</sup> <a name="DefaultPerOcpuInGbps" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.defaultPerOcpuInGbps"></a>

```go
func DefaultPerOcpuInGbps() *f64
```

- *Type:* *f64

---

##### `MaxInGbps`<sup>Required</sup> <a name="MaxInGbps" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.maxInGbps"></a>

```go
func MaxInGbps() *f64
```

- *Type:* *f64

---

##### `MinInGbps`<sup>Required</sup> <a name="MinInGbps" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.minInGbps"></a>

```go
func MinInGbps() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreShapesShapesNetworkingBandwidthOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptions">DataOciCoreShapesShapesNetworkingBandwidthOptions</a>

---


### DataOciCoreShapesShapesOcpuOptionsList <a name="DataOciCoreShapesShapesOcpuOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesOcpuOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreShapesShapesOcpuOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreShapesShapesOcpuOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreShapesShapesOcpuOptionsOutputReference <a name="DataOciCoreShapesShapesOcpuOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesOcpuOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreShapesShapesOcpuOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.maxPerNumaNode">MaxPerNumaNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptions">DataOciCoreShapesShapesOcpuOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `MaxPerNumaNode`<sup>Required</sup> <a name="MaxPerNumaNode" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.maxPerNumaNode"></a>

```go
func MaxPerNumaNode() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreShapesShapesOcpuOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptions">DataOciCoreShapesShapesOcpuOptions</a>

---


### DataOciCoreShapesShapesOutputReference <a name="DataOciCoreShapesShapesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreShapesShapesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.baselineOcpuUtilizations">BaselineOcpuUtilizations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.billingType">BillingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.gpuDescription">GpuDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.gpus">Gpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isBilledForStoppedInstance">IsBilledForStoppedInstance</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isFlexible">IsFlexible</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isLiveMigrationSupported">IsLiveMigrationSupported</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isSubcore">IsSubcore</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.localDiskDescription">LocalDiskDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.localDisks">LocalDisks</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.localDisksTotalSizeInGbs">LocalDisksTotalSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.maxVnicAttachmentOptions">MaxVnicAttachmentOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList">DataOciCoreShapesShapesMaxVnicAttachmentOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.maxVnicAttachments">MaxVnicAttachments</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.memoryOptions">MemoryOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList">DataOciCoreShapesShapesMemoryOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.minTotalBaselineOcpusRequired">MinTotalBaselineOcpusRequired</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.networkingBandwidthInGbps">NetworkingBandwidthInGbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.networkingBandwidthOptions">NetworkingBandwidthOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList">DataOciCoreShapesShapesNetworkingBandwidthOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.networkPorts">NetworkPorts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.ocpuOptions">OcpuOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList">DataOciCoreShapesShapesOcpuOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.platformConfigOptions">PlatformConfigOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.processorDescription">ProcessorDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.quotaNames">QuotaNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.rdmaBandwidthInGbps">RdmaBandwidthInGbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.rdmaPorts">RdmaPorts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.recommendedAlternatives">RecommendedAlternatives</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList">DataOciCoreShapesShapesRecommendedAlternativesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.resizeCompatibleShapes">ResizeCompatibleShapes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapes">DataOciCoreShapesShapes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaselineOcpuUtilizations`<sup>Required</sup> <a name="BaselineOcpuUtilizations" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.baselineOcpuUtilizations"></a>

```go
func BaselineOcpuUtilizations() *[]*string
```

- *Type:* *[]*string

---

##### `BillingType`<sup>Required</sup> <a name="BillingType" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.billingType"></a>

```go
func BillingType() *string
```

- *Type:* *string

---

##### `GpuDescription`<sup>Required</sup> <a name="GpuDescription" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.gpuDescription"></a>

```go
func GpuDescription() *string
```

- *Type:* *string

---

##### `Gpus`<sup>Required</sup> <a name="Gpus" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.gpus"></a>

```go
func Gpus() *f64
```

- *Type:* *f64

---

##### `IsBilledForStoppedInstance`<sup>Required</sup> <a name="IsBilledForStoppedInstance" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isBilledForStoppedInstance"></a>

```go
func IsBilledForStoppedInstance() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsFlexible`<sup>Required</sup> <a name="IsFlexible" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isFlexible"></a>

```go
func IsFlexible() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsLiveMigrationSupported`<sup>Required</sup> <a name="IsLiveMigrationSupported" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isLiveMigrationSupported"></a>

```go
func IsLiveMigrationSupported() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSubcore`<sup>Required</sup> <a name="IsSubcore" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isSubcore"></a>

```go
func IsSubcore() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LocalDiskDescription`<sup>Required</sup> <a name="LocalDiskDescription" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.localDiskDescription"></a>

```go
func LocalDiskDescription() *string
```

- *Type:* *string

---

##### `LocalDisks`<sup>Required</sup> <a name="LocalDisks" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.localDisks"></a>

```go
func LocalDisks() *f64
```

- *Type:* *f64

---

##### `LocalDisksTotalSizeInGbs`<sup>Required</sup> <a name="LocalDisksTotalSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.localDisksTotalSizeInGbs"></a>

```go
func LocalDisksTotalSizeInGbs() *f64
```

- *Type:* *f64

---

##### `MaxVnicAttachmentOptions`<sup>Required</sup> <a name="MaxVnicAttachmentOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.maxVnicAttachmentOptions"></a>

```go
func MaxVnicAttachmentOptions() DataOciCoreShapesShapesMaxVnicAttachmentOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList">DataOciCoreShapesShapesMaxVnicAttachmentOptionsList</a>

---

##### `MaxVnicAttachments`<sup>Required</sup> <a name="MaxVnicAttachments" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.maxVnicAttachments"></a>

```go
func MaxVnicAttachments() *f64
```

- *Type:* *f64

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `MemoryOptions`<sup>Required</sup> <a name="MemoryOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.memoryOptions"></a>

```go
func MemoryOptions() DataOciCoreShapesShapesMemoryOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList">DataOciCoreShapesShapesMemoryOptionsList</a>

---

##### `MinTotalBaselineOcpusRequired`<sup>Required</sup> <a name="MinTotalBaselineOcpusRequired" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.minTotalBaselineOcpusRequired"></a>

```go
func MinTotalBaselineOcpusRequired() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkingBandwidthInGbps`<sup>Required</sup> <a name="NetworkingBandwidthInGbps" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.networkingBandwidthInGbps"></a>

```go
func NetworkingBandwidthInGbps() *f64
```

- *Type:* *f64

---

##### `NetworkingBandwidthOptions`<sup>Required</sup> <a name="NetworkingBandwidthOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.networkingBandwidthOptions"></a>

```go
func NetworkingBandwidthOptions() DataOciCoreShapesShapesNetworkingBandwidthOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList">DataOciCoreShapesShapesNetworkingBandwidthOptionsList</a>

---

##### `NetworkPorts`<sup>Required</sup> <a name="NetworkPorts" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.networkPorts"></a>

```go
func NetworkPorts() *f64
```

- *Type:* *f64

---

##### `OcpuOptions`<sup>Required</sup> <a name="OcpuOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.ocpuOptions"></a>

```go
func OcpuOptions() DataOciCoreShapesShapesOcpuOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList">DataOciCoreShapesShapesOcpuOptionsList</a>

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `PlatformConfigOptions`<sup>Required</sup> <a name="PlatformConfigOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.platformConfigOptions"></a>

```go
func PlatformConfigOptions() DataOciCoreShapesShapesPlatformConfigOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsList</a>

---

##### `ProcessorDescription`<sup>Required</sup> <a name="ProcessorDescription" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.processorDescription"></a>

```go
func ProcessorDescription() *string
```

- *Type:* *string

---

##### `QuotaNames`<sup>Required</sup> <a name="QuotaNames" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.quotaNames"></a>

```go
func QuotaNames() *[]*string
```

- *Type:* *[]*string

---

##### `RdmaBandwidthInGbps`<sup>Required</sup> <a name="RdmaBandwidthInGbps" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.rdmaBandwidthInGbps"></a>

```go
func RdmaBandwidthInGbps() *f64
```

- *Type:* *f64

---

##### `RdmaPorts`<sup>Required</sup> <a name="RdmaPorts" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.rdmaPorts"></a>

```go
func RdmaPorts() *f64
```

- *Type:* *f64

---

##### `RecommendedAlternatives`<sup>Required</sup> <a name="RecommendedAlternatives" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.recommendedAlternatives"></a>

```go
func RecommendedAlternatives() DataOciCoreShapesShapesRecommendedAlternativesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList">DataOciCoreShapesShapesRecommendedAlternativesList</a>

---

##### `ResizeCompatibleShapes`<sup>Required</sup> <a name="ResizeCompatibleShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.resizeCompatibleShapes"></a>

```go
func ResizeCompatibleShapes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreShapesShapes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapes">DataOciCoreShapesShapes</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.allowedValues">AllowedValues</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.isDefaultEnabled">IsDefaultEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions">DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.allowedValues"></a>

```go
func AllowedValues() BooleanList
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.BooleanList

---

##### `IsDefaultEnabled`<sup>Required</sup> <a name="IsDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.isDefaultEnabled"></a>

```go
func IsDefaultEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions">DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.allowedValues">AllowedValues</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.isDefaultEnabled">IsDefaultEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions">DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.allowedValues"></a>

```go
func AllowedValues() BooleanList
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.BooleanList

---

##### `IsDefaultEnabled`<sup>Required</sup> <a name="IsDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.isDefaultEnabled"></a>

```go
func IsDefaultEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions">DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesPlatformConfigOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreShapesShapesPlatformConfigOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreShapesShapesPlatformConfigOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.allowedValues">AllowedValues</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.isDefaultEnabled">IsDefaultEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions">DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.allowedValues"></a>

```go
func AllowedValues() BooleanList
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.BooleanList

---

##### `IsDefaultEnabled`<sup>Required</sup> <a name="IsDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.isDefaultEnabled"></a>

```go
func IsDefaultEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions">DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.allowedValues">AllowedValues</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.isDefaultEnabled">IsDefaultEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions">DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.allowedValues"></a>

```go
func AllowedValues() BooleanList
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.BooleanList

---

##### `IsDefaultEnabled`<sup>Required</sup> <a name="IsDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.isDefaultEnabled"></a>

```go
func IsDefaultEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions">DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.allowedValues">AllowedValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions">DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.allowedValues"></a>

```go
func AllowedValues() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions">DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesPlatformConfigOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreShapesShapesPlatformConfigOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.accessControlServiceOptions">AccessControlServiceOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.inputOutputMemoryManagementUnitOptions">InputOutputMemoryManagementUnitOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.measuredBootOptions">MeasuredBootOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.memoryEncryptionOptions">MemoryEncryptionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.numaNodesPerSocketPlatformOptions">NumaNodesPerSocketPlatformOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.percentageOfCoresEnabledOptions">PercentageOfCoresEnabledOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.secureBootOptions">SecureBootOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.symmetricMultiThreadingOptions">SymmetricMultiThreadingOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.trustedPlatformModuleOptions">TrustedPlatformModuleOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.virtualInstructionsOptions">VirtualInstructionsOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptions">DataOciCoreShapesShapesPlatformConfigOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessControlServiceOptions`<sup>Required</sup> <a name="AccessControlServiceOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.accessControlServiceOptions"></a>

```go
func AccessControlServiceOptions() DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList</a>

---

##### `InputOutputMemoryManagementUnitOptions`<sup>Required</sup> <a name="InputOutputMemoryManagementUnitOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.inputOutputMemoryManagementUnitOptions"></a>

```go
func InputOutputMemoryManagementUnitOptions() DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList</a>

---

##### `MeasuredBootOptions`<sup>Required</sup> <a name="MeasuredBootOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.measuredBootOptions"></a>

```go
func MeasuredBootOptions() DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList</a>

---

##### `MemoryEncryptionOptions`<sup>Required</sup> <a name="MemoryEncryptionOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.memoryEncryptionOptions"></a>

```go
func MemoryEncryptionOptions() DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList</a>

---

##### `NumaNodesPerSocketPlatformOptions`<sup>Required</sup> <a name="NumaNodesPerSocketPlatformOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.numaNodesPerSocketPlatformOptions"></a>

```go
func NumaNodesPerSocketPlatformOptions() DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList</a>

---

##### `PercentageOfCoresEnabledOptions`<sup>Required</sup> <a name="PercentageOfCoresEnabledOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.percentageOfCoresEnabledOptions"></a>

```go
func PercentageOfCoresEnabledOptions() DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList</a>

---

##### `SecureBootOptions`<sup>Required</sup> <a name="SecureBootOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.secureBootOptions"></a>

```go
func SecureBootOptions() DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList</a>

---

##### `SymmetricMultiThreadingOptions`<sup>Required</sup> <a name="SymmetricMultiThreadingOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.symmetricMultiThreadingOptions"></a>

```go
func SymmetricMultiThreadingOptions() DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList</a>

---

##### `TrustedPlatformModuleOptions`<sup>Required</sup> <a name="TrustedPlatformModuleOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.trustedPlatformModuleOptions"></a>

```go
func TrustedPlatformModuleOptions() DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VirtualInstructionsOptions`<sup>Required</sup> <a name="VirtualInstructionsOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.virtualInstructionsOptions"></a>

```go
func VirtualInstructionsOptions() DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreShapesShapesPlatformConfigOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptions">DataOciCoreShapesShapesPlatformConfigOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions">DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions">DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.allowedValues">AllowedValues</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.isDefaultEnabled">IsDefaultEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions">DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.allowedValues"></a>

```go
func AllowedValues() BooleanList
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.BooleanList

---

##### `IsDefaultEnabled`<sup>Required</sup> <a name="IsDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.isDefaultEnabled"></a>

```go
func IsDefaultEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions">DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.allowedValues">AllowedValues</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.isDefaultEnabled">IsDefaultEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions">DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.allowedValues"></a>

```go
func AllowedValues() BooleanList
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.BooleanList

---

##### `IsDefaultEnabled`<sup>Required</sup> <a name="IsDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.isDefaultEnabled"></a>

```go
func IsDefaultEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions">DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.allowedValues">AllowedValues</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.isDefaultEnabled">IsDefaultEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions">DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.allowedValues"></a>

```go
func AllowedValues() BooleanList
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.BooleanList

---

##### `IsDefaultEnabled`<sup>Required</sup> <a name="IsDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.isDefaultEnabled"></a>

```go
func IsDefaultEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions">DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.allowedValues">AllowedValues</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.isDefaultEnabled">IsDefaultEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions">DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.allowedValues"></a>

```go
func AllowedValues() BooleanList
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.BooleanList

---

##### `IsDefaultEnabled`<sup>Required</sup> <a name="IsDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.isDefaultEnabled"></a>

```go
func IsDefaultEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions">DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions</a>

---


### DataOciCoreShapesShapesRecommendedAlternativesList <a name="DataOciCoreShapesShapesRecommendedAlternativesList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesRecommendedAlternativesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreShapesShapesRecommendedAlternativesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.get"></a>

```go
func Get(index *f64) DataOciCoreShapesShapesRecommendedAlternativesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreShapesShapesRecommendedAlternativesOutputReference <a name="DataOciCoreShapesShapesRecommendedAlternativesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreshapes"

dataocicoreshapes.NewDataOciCoreShapesShapesRecommendedAlternativesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreShapesShapesRecommendedAlternativesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.shapeName">ShapeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternatives">DataOciCoreShapesShapesRecommendedAlternatives</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.shapeName"></a>

```go
func ShapeName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreShapesShapesRecommendedAlternatives
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternatives">DataOciCoreShapesShapesRecommendedAlternatives</a>

---




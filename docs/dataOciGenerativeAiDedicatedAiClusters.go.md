# `dataOciGenerativeAiDedicatedAiClusters` Submodule <a name="`dataOciGenerativeAiDedicatedAiClusters` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGenerativeAiDedicatedAiClusters <a name="DataOciGenerativeAiDedicatedAiClusters" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters oci_generative_ai_dedicated_ai_clusters}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaidedicatedaiclusters"

dataocigenerativeaidedicatedaiclusters.NewDataOciGenerativeAiDedicatedAiClusters(scope Construct, id *string, config DataOciGenerativeAiDedicatedAiClustersConfig) DataOciGenerativeAiDedicatedAiClusters
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig">DataOciGenerativeAiDedicatedAiClustersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig">DataOciGenerativeAiDedicatedAiClustersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGenerativeAiDedicatedAiClusters resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaidedicatedaiclusters"

dataocigenerativeaidedicatedaiclusters.DataOciGenerativeAiDedicatedAiClusters_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaidedicatedaiclusters"

dataocigenerativeaidedicatedaiclusters.DataOciGenerativeAiDedicatedAiClusters_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaidedicatedaiclusters"

dataocigenerativeaidedicatedaiclusters.DataOciGenerativeAiDedicatedAiClusters_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaidedicatedaiclusters"

dataocigenerativeaidedicatedaiclusters.DataOciGenerativeAiDedicatedAiClusters_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciGenerativeAiDedicatedAiClusters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciGenerativeAiDedicatedAiClusters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciGenerativeAiDedicatedAiClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGenerativeAiDedicatedAiClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.dedicatedAiClusterCollection">DedicatedAiClusterCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList">DataOciGenerativeAiDedicatedAiClustersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DedicatedAiClusterCollection`<sup>Required</sup> <a name="DedicatedAiClusterCollection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.dedicatedAiClusterCollection"></a>

```go
func DedicatedAiClusterCollection() DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.filter"></a>

```go
func Filter() DataOciGenerativeAiDedicatedAiClustersFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList">DataOciGenerativeAiDedicatedAiClustersFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGenerativeAiDedicatedAiClustersConfig <a name="DataOciGenerativeAiDedicatedAiClustersConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaidedicatedaiclusters"

&dataocigenerativeaidedicatedaiclusters.DataOciGenerativeAiDedicatedAiClustersConfig {
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#compartment_id DataOciGenerativeAiDedicatedAiClusters#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#display_name DataOciGenerativeAiDedicatedAiClusters#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#id DataOciGenerativeAiDedicatedAiClusters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#state DataOciGenerativeAiDedicatedAiClusters#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#compartment_id DataOciGenerativeAiDedicatedAiClusters#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#display_name DataOciGenerativeAiDedicatedAiClusters#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#filter DataOciGenerativeAiDedicatedAiClusters#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#id DataOciGenerativeAiDedicatedAiClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#state DataOciGenerativeAiDedicatedAiClusters#state}.

---

### DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection <a name="DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaidedicatedaiclusters"

&dataocigenerativeaidedicatedaiclusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection {

}
```


### DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems <a name="DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaidedicatedaiclusters"

&dataocigenerativeaidedicatedaiclusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems {

}
```


### DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity <a name="DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaidedicatedaiclusters"

&dataocigenerativeaidedicatedaiclusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity {

}
```


### DataOciGenerativeAiDedicatedAiClustersFilter <a name="DataOciGenerativeAiDedicatedAiClustersFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaidedicatedaiclusters"

&dataocigenerativeaidedicatedaiclusters.DataOciGenerativeAiDedicatedAiClustersFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#name DataOciGenerativeAiDedicatedAiClusters#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#values DataOciGenerativeAiDedicatedAiClusters#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#regex DataOciGenerativeAiDedicatedAiClusters#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#name DataOciGenerativeAiDedicatedAiClusters#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#values DataOciGenerativeAiDedicatedAiClusters#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#regex DataOciGenerativeAiDedicatedAiClusters#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList <a name="DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaidedicatedaiclusters"

dataocigenerativeaidedicatedaiclusters.NewDataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference <a name="DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaidedicatedaiclusters"

dataocigenerativeaidedicatedaiclusters.NewDataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.capacityType">CapacityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.totalEndpointCapacity">TotalEndpointCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.usedEndpointCapacity">UsedEndpointCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityType`<sup>Required</sup> <a name="CapacityType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.capacityType"></a>

```go
func CapacityType() *string
```

- *Type:* *string

---

##### `TotalEndpointCapacity`<sup>Required</sup> <a name="TotalEndpointCapacity" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.totalEndpointCapacity"></a>

```go
func TotalEndpointCapacity() *f64
```

- *Type:* *f64

---

##### `UsedEndpointCapacity`<sup>Required</sup> <a name="UsedEndpointCapacity" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.usedEndpointCapacity"></a>

```go
func UsedEndpointCapacity() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity</a>

---


### DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList <a name="DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaidedicatedaiclusters"

dataocigenerativeaidedicatedaiclusters.NewDataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference <a name="DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaidedicatedaiclusters"

dataocigenerativeaidedicatedaiclusters.NewDataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.capacity">Capacity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.unitCount">UnitCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.unitShape">UnitShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.capacity"></a>

```go
func Capacity() DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UnitCount`<sup>Required</sup> <a name="UnitCount" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.unitCount"></a>

```go
func UnitCount() *f64
```

- *Type:* *f64

---

##### `UnitShape`<sup>Required</sup> <a name="UnitShape" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.unitShape"></a>

```go
func UnitShape() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems</a>

---


### DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList <a name="DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaidedicatedaiclusters"

dataocigenerativeaidedicatedaiclusters.NewDataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference <a name="DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaidedicatedaiclusters"

dataocigenerativeaidedicatedaiclusters.NewDataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.property.items"></a>

```go
func Items() DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection</a>

---


### DataOciGenerativeAiDedicatedAiClustersFilterList <a name="DataOciGenerativeAiDedicatedAiClustersFilterList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaidedicatedaiclusters"

dataocigenerativeaidedicatedaiclusters.NewDataOciGenerativeAiDedicatedAiClustersFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiDedicatedAiClustersFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiDedicatedAiClustersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciGenerativeAiDedicatedAiClustersFilterOutputReference <a name="DataOciGenerativeAiDedicatedAiClustersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaidedicatedaiclusters"

dataocigenerativeaidedicatedaiclusters.NewDataOciGenerativeAiDedicatedAiClustersFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiDedicatedAiClustersFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




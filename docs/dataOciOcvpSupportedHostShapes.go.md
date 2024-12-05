# `dataOciOcvpSupportedHostShapes` Submodule <a name="`dataOciOcvpSupportedHostShapes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOcvpSupportedHostShapes <a name="DataOciOcvpSupportedHostShapes" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes oci_ocvp_supported_host_shapes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpsupportedhostshapes"

dataociocvpsupportedhostshapes.NewDataOciOcvpSupportedHostShapes(scope Construct, id *string, config DataOciOcvpSupportedHostShapesConfig) DataOciOcvpSupportedHostShapes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig">DataOciOcvpSupportedHostShapesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig">DataOciOcvpSupportedHostShapesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.resetInitialHostShapeName">ResetInitialHostShapeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.resetIsSingleHostSddcSupported">ResetIsSingleHostSddcSupported</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.resetSddcType">ResetSddcType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.resetId"></a>

```go
func ResetId()
```

##### `ResetInitialHostShapeName` <a name="ResetInitialHostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.resetInitialHostShapeName"></a>

```go
func ResetInitialHostShapeName()
```

##### `ResetIsSingleHostSddcSupported` <a name="ResetIsSingleHostSddcSupported" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.resetIsSingleHostSddcSupported"></a>

```go
func ResetIsSingleHostSddcSupported()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.resetName"></a>

```go
func ResetName()
```

##### `ResetSddcType` <a name="ResetSddcType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.resetSddcType"></a>

```go
func ResetSddcType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOcvpSupportedHostShapes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpsupportedhostshapes"

dataociocvpsupportedhostshapes.DataOciOcvpSupportedHostShapes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpsupportedhostshapes"

dataociocvpsupportedhostshapes.DataOciOcvpSupportedHostShapes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpsupportedhostshapes"

dataociocvpsupportedhostshapes.DataOciOcvpSupportedHostShapes_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpsupportedhostshapes"

dataociocvpsupportedhostshapes.DataOciOcvpSupportedHostShapes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOcvpSupportedHostShapes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOcvpSupportedHostShapes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOcvpSupportedHostShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOcvpSupportedHostShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList">DataOciOcvpSupportedHostShapesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList">DataOciOcvpSupportedHostShapesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.initialHostShapeNameInput">InitialHostShapeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.isSingleHostSddcSupportedInput">IsSingleHostSddcSupportedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.sddcTypeInput">SddcTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.initialHostShapeName">InitialHostShapeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.isSingleHostSddcSupported">IsSingleHostSddcSupported</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.sddcType">SddcType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.filter"></a>

```go
func Filter() DataOciOcvpSupportedHostShapesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList">DataOciOcvpSupportedHostShapesFilterList</a>

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.items"></a>

```go
func Items() DataOciOcvpSupportedHostShapesItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList">DataOciOcvpSupportedHostShapesItemsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InitialHostShapeNameInput`<sup>Optional</sup> <a name="InitialHostShapeNameInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.initialHostShapeNameInput"></a>

```go
func InitialHostShapeNameInput() *string
```

- *Type:* *string

---

##### `IsSingleHostSddcSupportedInput`<sup>Optional</sup> <a name="IsSingleHostSddcSupportedInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.isSingleHostSddcSupportedInput"></a>

```go
func IsSingleHostSddcSupportedInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SddcTypeInput`<sup>Optional</sup> <a name="SddcTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.sddcTypeInput"></a>

```go
func SddcTypeInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InitialHostShapeName`<sup>Required</sup> <a name="InitialHostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.initialHostShapeName"></a>

```go
func InitialHostShapeName() *string
```

- *Type:* *string

---

##### `IsSingleHostSddcSupported`<sup>Required</sup> <a name="IsSingleHostSddcSupported" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.isSingleHostSddcSupported"></a>

```go
func IsSingleHostSddcSupported() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SddcType`<sup>Required</sup> <a name="SddcType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.sddcType"></a>

```go
func SddcType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOcvpSupportedHostShapesConfig <a name="DataOciOcvpSupportedHostShapesConfig" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpsupportedhostshapes"

&dataociocvpsupportedhostshapes.DataOciOcvpSupportedHostShapesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Filter: interface{},
	Id: *string,
	InitialHostShapeName: *string,
	IsSingleHostSddcSupported: interface{},
	Name: *string,
	SddcType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#compartment_id DataOciOcvpSupportedHostShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#id DataOciOcvpSupportedHostShapes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.initialHostShapeName">InitialHostShapeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#initial_host_shape_name DataOciOcvpSupportedHostShapes#initial_host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.isSingleHostSddcSupported">IsSingleHostSddcSupported</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#is_single_host_sddc_supported DataOciOcvpSupportedHostShapes#is_single_host_sddc_supported}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#name DataOciOcvpSupportedHostShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.sddcType">SddcType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#sddc_type DataOciOcvpSupportedHostShapes#sddc_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#compartment_id DataOciOcvpSupportedHostShapes#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#filter DataOciOcvpSupportedHostShapes#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#id DataOciOcvpSupportedHostShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialHostShapeName`<sup>Optional</sup> <a name="InitialHostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.initialHostShapeName"></a>

```go
InitialHostShapeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#initial_host_shape_name DataOciOcvpSupportedHostShapes#initial_host_shape_name}.

---

##### `IsSingleHostSddcSupported`<sup>Optional</sup> <a name="IsSingleHostSddcSupported" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.isSingleHostSddcSupported"></a>

```go
IsSingleHostSddcSupported interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#is_single_host_sddc_supported DataOciOcvpSupportedHostShapes#is_single_host_sddc_supported}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#name DataOciOcvpSupportedHostShapes#name}.

---

##### `SddcType`<sup>Optional</sup> <a name="SddcType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesConfig.property.sddcType"></a>

```go
SddcType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#sddc_type DataOciOcvpSupportedHostShapes#sddc_type}.

---

### DataOciOcvpSupportedHostShapesFilter <a name="DataOciOcvpSupportedHostShapesFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpsupportedhostshapes"

&dataociocvpsupportedhostshapes.DataOciOcvpSupportedHostShapesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#name DataOciOcvpSupportedHostShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#values DataOciOcvpSupportedHostShapes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#regex DataOciOcvpSupportedHostShapes#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#name DataOciOcvpSupportedHostShapes#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#values DataOciOcvpSupportedHostShapes#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_host_shapes#regex DataOciOcvpSupportedHostShapes#regex}.

---

### DataOciOcvpSupportedHostShapesItems <a name="DataOciOcvpSupportedHostShapesItems" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpsupportedhostshapes"

&dataociocvpsupportedhostshapes.DataOciOcvpSupportedHostShapesItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOcvpSupportedHostShapesFilterList <a name="DataOciOcvpSupportedHostShapesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpsupportedhostshapes"

dataociocvpsupportedhostshapes.NewDataOciOcvpSupportedHostShapesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOcvpSupportedHostShapesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.get"></a>

```go
func Get(index *f64) DataOciOcvpSupportedHostShapesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOcvpSupportedHostShapesFilterOutputReference <a name="DataOciOcvpSupportedHostShapesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpsupportedhostshapes"

dataociocvpsupportedhostshapes.NewDataOciOcvpSupportedHostShapesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOcvpSupportedHostShapesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOcvpSupportedHostShapesItemsList <a name="DataOciOcvpSupportedHostShapesItemsList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpsupportedhostshapes"

dataociocvpsupportedhostshapes.NewDataOciOcvpSupportedHostShapesItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOcvpSupportedHostShapesItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.get"></a>

```go
func Get(index *f64) DataOciOcvpSupportedHostShapesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOcvpSupportedHostShapesItemsOutputReference <a name="DataOciOcvpSupportedHostShapesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpsupportedhostshapes"

dataociocvpsupportedhostshapes.NewDataOciOcvpSupportedHostShapesItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOcvpSupportedHostShapesItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.defaultOcpuCount">DefaultOcpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.isSingleHostSddcSupported">IsSingleHostSddcSupported</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.isSupportMonthlyCommitment">IsSupportMonthlyCommitment</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.isSupportMonthlySku">IsSupportMonthlySku</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.isSupportShieldedInstances">IsSupportShieldedInstances</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.shapeFamily">ShapeFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.supportedOcpuCount">SupportedOcpuCount</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.supportedOperations">SupportedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.supportedSddcTypes">SupportedSddcTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.supportedVmwareSoftwareVersions">SupportedVmwareSoftwareVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItems">DataOciOcvpSupportedHostShapesItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultOcpuCount`<sup>Required</sup> <a name="DefaultOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.defaultOcpuCount"></a>

```go
func DefaultOcpuCount() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IsSingleHostSddcSupported`<sup>Required</sup> <a name="IsSingleHostSddcSupported" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.isSingleHostSddcSupported"></a>

```go
func IsSingleHostSddcSupported() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSupportMonthlyCommitment`<sup>Required</sup> <a name="IsSupportMonthlyCommitment" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.isSupportMonthlyCommitment"></a>

```go
func IsSupportMonthlyCommitment() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSupportMonthlySku`<sup>Required</sup> <a name="IsSupportMonthlySku" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.isSupportMonthlySku"></a>

```go
func IsSupportMonthlySku() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSupportShieldedInstances`<sup>Required</sup> <a name="IsSupportShieldedInstances" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.isSupportShieldedInstances"></a>

```go
func IsSupportShieldedInstances() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ShapeFamily`<sup>Required</sup> <a name="ShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.shapeFamily"></a>

```go
func ShapeFamily() *string
```

- *Type:* *string

---

##### `SupportedOcpuCount`<sup>Required</sup> <a name="SupportedOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.supportedOcpuCount"></a>

```go
func SupportedOcpuCount() *[]*f64
```

- *Type:* *[]*f64

---

##### `SupportedOperations`<sup>Required</sup> <a name="SupportedOperations" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.supportedOperations"></a>

```go
func SupportedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `SupportedSddcTypes`<sup>Required</sup> <a name="SupportedSddcTypes" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.supportedSddcTypes"></a>

```go
func SupportedSddcTypes() *[]*string
```

- *Type:* *[]*string

---

##### `SupportedVmwareSoftwareVersions`<sup>Required</sup> <a name="SupportedVmwareSoftwareVersions" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.supportedVmwareSoftwareVersions"></a>

```go
func SupportedVmwareSoftwareVersions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOcvpSupportedHostShapesItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedHostShapes.DataOciOcvpSupportedHostShapesItems">DataOciOcvpSupportedHostShapesItems</a>

---




# `dataOciVnMonitoringPathAnalyzerTests` Submodule <a name="`dataOciVnMonitoringPathAnalyzerTests` Submodule" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciVnMonitoringPathAnalyzerTests <a name="DataOciVnMonitoringPathAnalyzerTests" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests oci_vn_monitoring_path_analyzer_tests}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertests"

dataocivnmonitoringpathanalyzertests.NewDataOciVnMonitoringPathAnalyzerTests(scope Construct, id *string, config DataOciVnMonitoringPathAnalyzerTestsConfig) DataOciVnMonitoringPathAnalyzerTests
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig">DataOciVnMonitoringPathAnalyzerTestsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig">DataOciVnMonitoringPathAnalyzerTestsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciVnMonitoringPathAnalyzerTests resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertests"

dataocivnmonitoringpathanalyzertests.DataOciVnMonitoringPathAnalyzerTests_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertests"

dataocivnmonitoringpathanalyzertests.DataOciVnMonitoringPathAnalyzerTests_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertests"

dataocivnmonitoringpathanalyzertests.DataOciVnMonitoringPathAnalyzerTests_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertests"

dataocivnmonitoringpathanalyzertests.DataOciVnMonitoringPathAnalyzerTests_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciVnMonitoringPathAnalyzerTests resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciVnMonitoringPathAnalyzerTests to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciVnMonitoringPathAnalyzerTests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciVnMonitoringPathAnalyzerTests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList">DataOciVnMonitoringPathAnalyzerTestsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.pathAnalyzerTestCollection">PathAnalyzerTestCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.filter"></a>

```go
func Filter() DataOciVnMonitoringPathAnalyzerTestsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList">DataOciVnMonitoringPathAnalyzerTestsFilterList</a>

---

##### `PathAnalyzerTestCollection`<sup>Required</sup> <a name="PathAnalyzerTestCollection" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.pathAnalyzerTestCollection"></a>

```go
func PathAnalyzerTestCollection() DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTests.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciVnMonitoringPathAnalyzerTestsConfig <a name="DataOciVnMonitoringPathAnalyzerTestsConfig" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertests"

&dataocivnmonitoringpathanalyzertests.DataOciVnMonitoringPathAnalyzerTestsConfig {
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#compartment_id DataOciVnMonitoringPathAnalyzerTests#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#display_name DataOciVnMonitoringPathAnalyzerTests#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#id DataOciVnMonitoringPathAnalyzerTests#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#state DataOciVnMonitoringPathAnalyzerTests#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#compartment_id DataOciVnMonitoringPathAnalyzerTests#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#display_name DataOciVnMonitoringPathAnalyzerTests#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#filter DataOciVnMonitoringPathAnalyzerTests#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#id DataOciVnMonitoringPathAnalyzerTests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#state DataOciVnMonitoringPathAnalyzerTests#state}.

---

### DataOciVnMonitoringPathAnalyzerTestsFilter <a name="DataOciVnMonitoringPathAnalyzerTestsFilter" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertests"

&dataocivnmonitoringpathanalyzertests.DataOciVnMonitoringPathAnalyzerTestsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#name DataOciVnMonitoringPathAnalyzerTests#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#values DataOciVnMonitoringPathAnalyzerTests#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#regex DataOciVnMonitoringPathAnalyzerTests#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#name DataOciVnMonitoringPathAnalyzerTests#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#values DataOciVnMonitoringPathAnalyzerTests#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_tests#regex DataOciVnMonitoringPathAnalyzerTests#regex}.

---

### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertests"

&dataocivnmonitoringpathanalyzertests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection {

}
```


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertests"

&dataocivnmonitoringpathanalyzertests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems {

}
```


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertests"

&dataocivnmonitoringpathanalyzertests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint {

}
```


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertests"

&dataocivnmonitoringpathanalyzertests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters {

}
```


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertests"

&dataocivnmonitoringpathanalyzertests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions {

}
```


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertests"

&dataocivnmonitoringpathanalyzertests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciVnMonitoringPathAnalyzerTestsFilterList <a name="DataOciVnMonitoringPathAnalyzerTestsFilterList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertests"

dataocivnmonitoringpathanalyzertests.NewDataOciVnMonitoringPathAnalyzerTestsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciVnMonitoringPathAnalyzerTestsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.get"></a>

```go
func Get(index *f64) DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertests"

dataocivnmonitoringpathanalyzertests.NewDataOciVnMonitoringPathAnalyzerTestsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertests"

dataocivnmonitoringpathanalyzertests.NewDataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.get"></a>

```go
func Get(index *f64) DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertests"

dataocivnmonitoringpathanalyzertests.NewDataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.listenerId">ListenerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.vlanId">VlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.vnicId">VnicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `ListenerId`<sup>Required</sup> <a name="ListenerId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.listenerId"></a>

```go
func ListenerId() *string
```

- *Type:* *string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.loadBalancerId"></a>

```go
func LoadBalancerId() *string
```

- *Type:* *string

---

##### `NetworkLoadBalancerId`<sup>Required</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.networkLoadBalancerId"></a>

```go
func NetworkLoadBalancerId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.vlanId"></a>

```go
func VlanId() *string
```

- *Type:* *string

---

##### `VnicId`<sup>Required</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.vnicId"></a>

```go
func VnicId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpoint</a>

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertests"

dataocivnmonitoringpathanalyzertests.NewDataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertests"

dataocivnmonitoringpathanalyzertests.NewDataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.destinationEndpoint">DestinationEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.protocol">Protocol</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.protocolParameters">ProtocolParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.queryOptions">QueryOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.sourceEndpoint">SourceEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DestinationEndpoint`<sup>Required</sup> <a name="DestinationEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.destinationEndpoint"></a>

```go
func DestinationEndpoint() DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsDestinationEndpointList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.protocol"></a>

```go
func Protocol() *f64
```

- *Type:* *f64

---

##### `ProtocolParameters`<sup>Required</sup> <a name="ProtocolParameters" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.protocolParameters"></a>

```go
func ProtocolParameters() DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList</a>

---

##### `QueryOptions`<sup>Required</sup> <a name="QueryOptions" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.queryOptions"></a>

```go
func QueryOptions() DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList</a>

---

##### `SourceEndpoint`<sup>Required</sup> <a name="SourceEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.sourceEndpoint"></a>

```go
func SourceEndpoint() DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItems</a>

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertests"

dataocivnmonitoringpathanalyzertests.NewDataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.get"></a>

```go
func Get(index *f64) DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertests"

dataocivnmonitoringpathanalyzertests.NewDataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.destinationPort">DestinationPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.icmpCode">IcmpCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.icmpType">IcmpType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.sourcePort">SourcePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationPort`<sup>Required</sup> <a name="DestinationPort" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.destinationPort"></a>

```go
func DestinationPort() *f64
```

- *Type:* *f64

---

##### `IcmpCode`<sup>Required</sup> <a name="IcmpCode" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.icmpCode"></a>

```go
func IcmpCode() *f64
```

- *Type:* *f64

---

##### `IcmpType`<sup>Required</sup> <a name="IcmpType" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.icmpType"></a>

```go
func IcmpType() *f64
```

- *Type:* *f64

---

##### `SourcePort`<sup>Required</sup> <a name="SourcePort" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.sourcePort"></a>

```go
func SourcePort() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsProtocolParameters</a>

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertests"

dataocivnmonitoringpathanalyzertests.NewDataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.get"></a>

```go
func Get(index *f64) DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertests"

dataocivnmonitoringpathanalyzertests.NewDataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.isBiDirectionalAnalysis">IsBiDirectionalAnalysis</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsBiDirectionalAnalysis`<sup>Required</sup> <a name="IsBiDirectionalAnalysis" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.isBiDirectionalAnalysis"></a>

```go
func IsBiDirectionalAnalysis() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsQueryOptions</a>

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertests"

dataocivnmonitoringpathanalyzertests.NewDataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.get"></a>

```go
func Get(index *f64) DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertests"

dataocivnmonitoringpathanalyzertests.NewDataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.listenerId">ListenerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.vlanId">VlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.vnicId">VnicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `ListenerId`<sup>Required</sup> <a name="ListenerId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.listenerId"></a>

```go
func ListenerId() *string
```

- *Type:* *string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.loadBalancerId"></a>

```go
func LoadBalancerId() *string
```

- *Type:* *string

---

##### `NetworkLoadBalancerId`<sup>Required</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.networkLoadBalancerId"></a>

```go
func NetworkLoadBalancerId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.vlanId"></a>

```go
func VlanId() *string
```

- *Type:* *string

---

##### `VnicId`<sup>Required</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.vnicId"></a>

```go
func VnicId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsSourceEndpoint</a>

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertests"

dataocivnmonitoringpathanalyzertests.NewDataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.get"></a>

```go
func Get(index *f64) DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertests"

dataocivnmonitoringpathanalyzertests.NewDataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.items"></a>

```go
func Items() DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTests.DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection">DataOciVnMonitoringPathAnalyzerTestsPathAnalyzerTestCollection</a>

---




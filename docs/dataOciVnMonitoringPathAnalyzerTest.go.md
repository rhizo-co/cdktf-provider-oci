# `dataOciVnMonitoringPathAnalyzerTest` Submodule <a name="`dataOciVnMonitoringPathAnalyzerTest` Submodule" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciVnMonitoringPathAnalyzerTest <a name="DataOciVnMonitoringPathAnalyzerTest" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_test oci_vn_monitoring_path_analyzer_test}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertest"

dataocivnmonitoringpathanalyzertest.NewDataOciVnMonitoringPathAnalyzerTest(scope Construct, id *string, config DataOciVnMonitoringPathAnalyzerTestConfig) DataOciVnMonitoringPathAnalyzerTest
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig">DataOciVnMonitoringPathAnalyzerTestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig">DataOciVnMonitoringPathAnalyzerTestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciVnMonitoringPathAnalyzerTest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertest"

dataocivnmonitoringpathanalyzertest.DataOciVnMonitoringPathAnalyzerTest_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertest"

dataocivnmonitoringpathanalyzertest.DataOciVnMonitoringPathAnalyzerTest_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertest"

dataocivnmonitoringpathanalyzertest.DataOciVnMonitoringPathAnalyzerTest_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertest"

dataocivnmonitoringpathanalyzertest.DataOciVnMonitoringPathAnalyzerTest_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciVnMonitoringPathAnalyzerTest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciVnMonitoringPathAnalyzerTest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciVnMonitoringPathAnalyzerTest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_test#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciVnMonitoringPathAnalyzerTest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.destinationEndpoint">DestinationEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList">DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.protocol">Protocol</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.protocolParameters">ProtocolParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList">DataOciVnMonitoringPathAnalyzerTestProtocolParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.queryOptions">QueryOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList">DataOciVnMonitoringPathAnalyzerTestQueryOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.sourceEndpoint">SourceEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList">DataOciVnMonitoringPathAnalyzerTestSourceEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.pathAnalyzerTestIdInput">PathAnalyzerTestIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.pathAnalyzerTestId">PathAnalyzerTestId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DestinationEndpoint`<sup>Required</sup> <a name="DestinationEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.destinationEndpoint"></a>

```go
func DestinationEndpoint() DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList">DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.protocol"></a>

```go
func Protocol() *f64
```

- *Type:* *f64

---

##### `ProtocolParameters`<sup>Required</sup> <a name="ProtocolParameters" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.protocolParameters"></a>

```go
func ProtocolParameters() DataOciVnMonitoringPathAnalyzerTestProtocolParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList">DataOciVnMonitoringPathAnalyzerTestProtocolParametersList</a>

---

##### `QueryOptions`<sup>Required</sup> <a name="QueryOptions" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.queryOptions"></a>

```go
func QueryOptions() DataOciVnMonitoringPathAnalyzerTestQueryOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList">DataOciVnMonitoringPathAnalyzerTestQueryOptionsList</a>

---

##### `SourceEndpoint`<sup>Required</sup> <a name="SourceEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.sourceEndpoint"></a>

```go
func SourceEndpoint() DataOciVnMonitoringPathAnalyzerTestSourceEndpointList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList">DataOciVnMonitoringPathAnalyzerTestSourceEndpointList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `PathAnalyzerTestIdInput`<sup>Optional</sup> <a name="PathAnalyzerTestIdInput" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.pathAnalyzerTestIdInput"></a>

```go
func PathAnalyzerTestIdInput() *string
```

- *Type:* *string

---

##### `PathAnalyzerTestId`<sup>Required</sup> <a name="PathAnalyzerTestId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.pathAnalyzerTestId"></a>

```go
func PathAnalyzerTestId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTest.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciVnMonitoringPathAnalyzerTestConfig <a name="DataOciVnMonitoringPathAnalyzerTestConfig" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertest"

&dataocivnmonitoringpathanalyzertest.DataOciVnMonitoringPathAnalyzerTestConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PathAnalyzerTestId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.pathAnalyzerTestId">PathAnalyzerTestId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_test#path_analyzer_test_id DataOciVnMonitoringPathAnalyzerTest#path_analyzer_test_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PathAnalyzerTestId`<sup>Required</sup> <a name="PathAnalyzerTestId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestConfig.property.pathAnalyzerTestId"></a>

```go
PathAnalyzerTestId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vn_monitoring_path_analyzer_test#path_analyzer_test_id DataOciVnMonitoringPathAnalyzerTest#path_analyzer_test_id}.

---

### DataOciVnMonitoringPathAnalyzerTestDestinationEndpoint <a name="DataOciVnMonitoringPathAnalyzerTestDestinationEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpoint.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertest"

&dataocivnmonitoringpathanalyzertest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpoint {

}
```


### DataOciVnMonitoringPathAnalyzerTestProtocolParameters <a name="DataOciVnMonitoringPathAnalyzerTestProtocolParameters" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParameters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertest"

&dataocivnmonitoringpathanalyzertest.DataOciVnMonitoringPathAnalyzerTestProtocolParameters {

}
```


### DataOciVnMonitoringPathAnalyzerTestQueryOptions <a name="DataOciVnMonitoringPathAnalyzerTestQueryOptions" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertest"

&dataocivnmonitoringpathanalyzertest.DataOciVnMonitoringPathAnalyzerTestQueryOptions {

}
```


### DataOciVnMonitoringPathAnalyzerTestSourceEndpoint <a name="DataOciVnMonitoringPathAnalyzerTestSourceEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpoint.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertest"

&dataocivnmonitoringpathanalyzertest.DataOciVnMonitoringPathAnalyzerTestSourceEndpoint {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList <a name="DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertest"

dataocivnmonitoringpathanalyzertest.NewDataOciVnMonitoringPathAnalyzerTestDestinationEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.get"></a>

```go
func Get(index *f64) DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertest"

dataocivnmonitoringpathanalyzertest.NewDataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.listenerId">ListenerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vlanId">VlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vnicId">VnicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpoint">DataOciVnMonitoringPathAnalyzerTestDestinationEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `ListenerId`<sup>Required</sup> <a name="ListenerId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.listenerId"></a>

```go
func ListenerId() *string
```

- *Type:* *string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.loadBalancerId"></a>

```go
func LoadBalancerId() *string
```

- *Type:* *string

---

##### `NetworkLoadBalancerId`<sup>Required</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.networkLoadBalancerId"></a>

```go
func NetworkLoadBalancerId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vlanId"></a>

```go
func VlanId() *string
```

- *Type:* *string

---

##### `VnicId`<sup>Required</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vnicId"></a>

```go
func VnicId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciVnMonitoringPathAnalyzerTestDestinationEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestDestinationEndpoint">DataOciVnMonitoringPathAnalyzerTestDestinationEndpoint</a>

---


### DataOciVnMonitoringPathAnalyzerTestProtocolParametersList <a name="DataOciVnMonitoringPathAnalyzerTestProtocolParametersList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertest"

dataocivnmonitoringpathanalyzertest.NewDataOciVnMonitoringPathAnalyzerTestProtocolParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciVnMonitoringPathAnalyzerTestProtocolParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.get"></a>

```go
func Get(index *f64) DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertest"

dataocivnmonitoringpathanalyzertest.NewDataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.destinationPort">DestinationPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpCode">IcmpCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpType">IcmpType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.sourcePort">SourcePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParameters">DataOciVnMonitoringPathAnalyzerTestProtocolParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationPort`<sup>Required</sup> <a name="DestinationPort" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.destinationPort"></a>

```go
func DestinationPort() *f64
```

- *Type:* *f64

---

##### `IcmpCode`<sup>Required</sup> <a name="IcmpCode" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpCode"></a>

```go
func IcmpCode() *f64
```

- *Type:* *f64

---

##### `IcmpType`<sup>Required</sup> <a name="IcmpType" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpType"></a>

```go
func IcmpType() *f64
```

- *Type:* *f64

---

##### `SourcePort`<sup>Required</sup> <a name="SourcePort" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.sourcePort"></a>

```go
func SourcePort() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciVnMonitoringPathAnalyzerTestProtocolParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestProtocolParameters">DataOciVnMonitoringPathAnalyzerTestProtocolParameters</a>

---


### DataOciVnMonitoringPathAnalyzerTestQueryOptionsList <a name="DataOciVnMonitoringPathAnalyzerTestQueryOptionsList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertest"

dataocivnmonitoringpathanalyzertest.NewDataOciVnMonitoringPathAnalyzerTestQueryOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciVnMonitoringPathAnalyzerTestQueryOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.get"></a>

```go
func Get(index *f64) DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertest"

dataocivnmonitoringpathanalyzertest.NewDataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.isBiDirectionalAnalysis">IsBiDirectionalAnalysis</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptions">DataOciVnMonitoringPathAnalyzerTestQueryOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsBiDirectionalAnalysis`<sup>Required</sup> <a name="IsBiDirectionalAnalysis" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.isBiDirectionalAnalysis"></a>

```go
func IsBiDirectionalAnalysis() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciVnMonitoringPathAnalyzerTestQueryOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestQueryOptions">DataOciVnMonitoringPathAnalyzerTestQueryOptions</a>

---


### DataOciVnMonitoringPathAnalyzerTestSourceEndpointList <a name="DataOciVnMonitoringPathAnalyzerTestSourceEndpointList" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertest"

dataocivnmonitoringpathanalyzertest.NewDataOciVnMonitoringPathAnalyzerTestSourceEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciVnMonitoringPathAnalyzerTestSourceEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.get"></a>

```go
func Get(index *f64) DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference <a name="DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivnmonitoringpathanalyzertest"

dataocivnmonitoringpathanalyzertest.NewDataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.listenerId">ListenerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vlanId">VlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vnicId">VnicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpoint">DataOciVnMonitoringPathAnalyzerTestSourceEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `ListenerId`<sup>Required</sup> <a name="ListenerId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.listenerId"></a>

```go
func ListenerId() *string
```

- *Type:* *string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.loadBalancerId"></a>

```go
func LoadBalancerId() *string
```

- *Type:* *string

---

##### `NetworkLoadBalancerId`<sup>Required</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.networkLoadBalancerId"></a>

```go
func NetworkLoadBalancerId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vlanId"></a>

```go
func VlanId() *string
```

- *Type:* *string

---

##### `VnicId`<sup>Required</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vnicId"></a>

```go
func VnicId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciVnMonitoringPathAnalyzerTestSourceEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVnMonitoringPathAnalyzerTest.DataOciVnMonitoringPathAnalyzerTestSourceEndpoint">DataOciVnMonitoringPathAnalyzerTestSourceEndpoint</a>

---




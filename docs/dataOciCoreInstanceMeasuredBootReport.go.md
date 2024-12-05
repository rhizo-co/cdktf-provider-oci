# `dataOciCoreInstanceMeasuredBootReport` Submodule <a name="`dataOciCoreInstanceMeasuredBootReport` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreInstanceMeasuredBootReport <a name="DataOciCoreInstanceMeasuredBootReport" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_measured_boot_report oci_core_instance_measured_boot_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemeasuredbootreport"

dataocicoreinstancemeasuredbootreport.NewDataOciCoreInstanceMeasuredBootReport(scope Construct, id *string, config DataOciCoreInstanceMeasuredBootReportConfig) DataOciCoreInstanceMeasuredBootReport
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig">DataOciCoreInstanceMeasuredBootReportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig">DataOciCoreInstanceMeasuredBootReportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreInstanceMeasuredBootReport resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemeasuredbootreport"

dataocicoreinstancemeasuredbootreport.DataOciCoreInstanceMeasuredBootReport_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemeasuredbootreport"

dataocicoreinstancemeasuredbootreport.DataOciCoreInstanceMeasuredBootReport_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemeasuredbootreport"

dataocicoreinstancemeasuredbootreport.DataOciCoreInstanceMeasuredBootReport_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemeasuredbootreport"

dataocicoreinstancemeasuredbootreport.DataOciCoreInstanceMeasuredBootReport_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreInstanceMeasuredBootReport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreInstanceMeasuredBootReport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreInstanceMeasuredBootReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_measured_boot_report#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreInstanceMeasuredBootReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.isPolicyVerificationSuccessful">IsPolicyVerificationSuccessful</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.measurements">Measurements</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList">DataOciCoreInstanceMeasuredBootReportMeasurementsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `IsPolicyVerificationSuccessful`<sup>Required</sup> <a name="IsPolicyVerificationSuccessful" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.isPolicyVerificationSuccessful"></a>

```go
func IsPolicyVerificationSuccessful() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Measurements`<sup>Required</sup> <a name="Measurements" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.measurements"></a>

```go
func Measurements() DataOciCoreInstanceMeasuredBootReportMeasurementsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList">DataOciCoreInstanceMeasuredBootReportMeasurementsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreInstanceMeasuredBootReportConfig <a name="DataOciCoreInstanceMeasuredBootReportConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemeasuredbootreport"

&dataocicoreinstancemeasuredbootreport.DataOciCoreInstanceMeasuredBootReportConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_measured_boot_report#instance_id DataOciCoreInstanceMeasuredBootReport#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_measured_boot_report#id DataOciCoreInstanceMeasuredBootReport#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_measured_boot_report#instance_id DataOciCoreInstanceMeasuredBootReport#instance_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_measured_boot_report#id DataOciCoreInstanceMeasuredBootReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreInstanceMeasuredBootReportMeasurements <a name="DataOciCoreInstanceMeasuredBootReportMeasurements" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurements"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurements.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemeasuredbootreport"

&dataocicoreinstancemeasuredbootreport.DataOciCoreInstanceMeasuredBootReportMeasurements {

}
```


### DataOciCoreInstanceMeasuredBootReportMeasurementsActual <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsActual" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActual"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActual.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemeasuredbootreport"

&dataocicoreinstancemeasuredbootreport.DataOciCoreInstanceMeasuredBootReportMeasurementsActual {

}
```


### DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemeasuredbootreport"

&dataocicoreinstancemeasuredbootreport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreInstanceMeasuredBootReportMeasurementsActualList <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsActualList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemeasuredbootreport"

dataocicoreinstancemeasuredbootreport.NewDataOciCoreInstanceMeasuredBootReportMeasurementsActualList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreInstanceMeasuredBootReportMeasurementsActualList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.get"></a>

```go
func Get(index *f64) DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemeasuredbootreport"

dataocicoreinstancemeasuredbootreport.NewDataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.hashAlgorithm">HashAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.pcrIndex">PcrIndex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActual">DataOciCoreInstanceMeasuredBootReportMeasurementsActual</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HashAlgorithm`<sup>Required</sup> <a name="HashAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.hashAlgorithm"></a>

```go
func HashAlgorithm() *string
```

- *Type:* *string

---

##### `PcrIndex`<sup>Required</sup> <a name="PcrIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.pcrIndex"></a>

```go
func PcrIndex() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreInstanceMeasuredBootReportMeasurementsActual
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActual">DataOciCoreInstanceMeasuredBootReportMeasurementsActual</a>

---


### DataOciCoreInstanceMeasuredBootReportMeasurementsList <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemeasuredbootreport"

dataocicoreinstancemeasuredbootreport.NewDataOciCoreInstanceMeasuredBootReportMeasurementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreInstanceMeasuredBootReportMeasurementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.get"></a>

```go
func Get(index *f64) DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemeasuredbootreport"

dataocicoreinstancemeasuredbootreport.NewDataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.actual">Actual</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList">DataOciCoreInstanceMeasuredBootReportMeasurementsActualList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.policy">Policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList">DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurements">DataOciCoreInstanceMeasuredBootReportMeasurements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actual`<sup>Required</sup> <a name="Actual" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.actual"></a>

```go
func Actual() DataOciCoreInstanceMeasuredBootReportMeasurementsActualList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList">DataOciCoreInstanceMeasuredBootReportMeasurementsActualList</a>

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.policy"></a>

```go
func Policy() DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList">DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreInstanceMeasuredBootReportMeasurements
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurements">DataOciCoreInstanceMeasuredBootReportMeasurements</a>

---


### DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemeasuredbootreport"

dataocicoreinstancemeasuredbootreport.NewDataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.get"></a>

```go
func Get(index *f64) DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemeasuredbootreport"

dataocicoreinstancemeasuredbootreport.NewDataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.hashAlgorithm">HashAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.pcrIndex">PcrIndex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy">DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HashAlgorithm`<sup>Required</sup> <a name="HashAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.hashAlgorithm"></a>

```go
func HashAlgorithm() *string
```

- *Type:* *string

---

##### `PcrIndex`<sup>Required</sup> <a name="PcrIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.pcrIndex"></a>

```go
func PcrIndex() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy">DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy</a>

---




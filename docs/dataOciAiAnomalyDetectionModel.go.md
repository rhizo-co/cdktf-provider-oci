# `dataOciAiAnomalyDetectionModel` Submodule <a name="`dataOciAiAnomalyDetectionModel` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAiAnomalyDetectionModel <a name="DataOciAiAnomalyDetectionModel" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_model oci_ai_anomaly_detection_model}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionmodel"

dataociaianomalydetectionmodel.NewDataOciAiAnomalyDetectionModel(scope Construct, id *string, config DataOciAiAnomalyDetectionModelConfig) DataOciAiAnomalyDetectionModel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig">DataOciAiAnomalyDetectionModelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig">DataOciAiAnomalyDetectionModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAiAnomalyDetectionModel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionmodel"

dataociaianomalydetectionmodel.DataOciAiAnomalyDetectionModel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionmodel"

dataociaianomalydetectionmodel.DataOciAiAnomalyDetectionModel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionmodel"

dataociaianomalydetectionmodel.DataOciAiAnomalyDetectionModel_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionmodel"

dataociaianomalydetectionmodel.DataOciAiAnomalyDetectionModel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciAiAnomalyDetectionModel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciAiAnomalyDetectionModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciAiAnomalyDetectionModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAiAnomalyDetectionModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.modelTrainingDetails">ModelTrainingDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList">DataOciAiAnomalyDetectionModelModelTrainingDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.modelTrainingResults">ModelTrainingResults</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList">DataOciAiAnomalyDetectionModelModelTrainingResultsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.modelIdInput">ModelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.modelId">ModelId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ModelTrainingDetails`<sup>Required</sup> <a name="ModelTrainingDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.modelTrainingDetails"></a>

```go
func ModelTrainingDetails() DataOciAiAnomalyDetectionModelModelTrainingDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList">DataOciAiAnomalyDetectionModelModelTrainingDetailsList</a>

---

##### `ModelTrainingResults`<sup>Required</sup> <a name="ModelTrainingResults" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.modelTrainingResults"></a>

```go
func ModelTrainingResults() DataOciAiAnomalyDetectionModelModelTrainingResultsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList">DataOciAiAnomalyDetectionModelModelTrainingResultsList</a>

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `ModelIdInput`<sup>Optional</sup> <a name="ModelIdInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.modelIdInput"></a>

```go
func ModelIdInput() *string
```

- *Type:* *string

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.modelId"></a>

```go
func ModelId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAiAnomalyDetectionModelConfig <a name="DataOciAiAnomalyDetectionModelConfig" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionmodel"

&dataociaianomalydetectionmodel.DataOciAiAnomalyDetectionModelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ModelId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.modelId">ModelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_model#model_id DataOciAiAnomalyDetectionModel#model_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelConfig.property.modelId"></a>

```go
ModelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_model#model_id DataOciAiAnomalyDetectionModel#model_id}.

---

### DataOciAiAnomalyDetectionModelModelTrainingDetails <a name="DataOciAiAnomalyDetectionModelModelTrainingDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionmodel"

&dataociaianomalydetectionmodel.DataOciAiAnomalyDetectionModelModelTrainingDetails {

}
```


### DataOciAiAnomalyDetectionModelModelTrainingResults <a name="DataOciAiAnomalyDetectionModelModelTrainingResults" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResults"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResults.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionmodel"

&dataociaianomalydetectionmodel.DataOciAiAnomalyDetectionModelModelTrainingResults {

}
```


### DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetails <a name="DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionmodel"

&dataociaianomalydetectionmodel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetails {

}
```


### DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetails <a name="DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionmodel"

&dataociaianomalydetectionmodel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAiAnomalyDetectionModelModelTrainingDetailsList <a name="DataOciAiAnomalyDetectionModelModelTrainingDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionmodel"

dataociaianomalydetectionmodel.NewDataOciAiAnomalyDetectionModelModelTrainingDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAiAnomalyDetectionModelModelTrainingDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.get"></a>

```go
func Get(index *f64) DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference <a name="DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionmodel"

dataociaianomalydetectionmodel.NewDataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.algorithmHint">AlgorithmHint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.dataAssetIds">DataAssetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.targetFap">TargetFap</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.trainingFraction">TrainingFraction</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.windowSize">WindowSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetails">DataOciAiAnomalyDetectionModelModelTrainingDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlgorithmHint`<sup>Required</sup> <a name="AlgorithmHint" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.algorithmHint"></a>

```go
func AlgorithmHint() *string
```

- *Type:* *string

---

##### `DataAssetIds`<sup>Required</sup> <a name="DataAssetIds" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.dataAssetIds"></a>

```go
func DataAssetIds() *[]*string
```

- *Type:* *[]*string

---

##### `TargetFap`<sup>Required</sup> <a name="TargetFap" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.targetFap"></a>

```go
func TargetFap() *f64
```

- *Type:* *f64

---

##### `TrainingFraction`<sup>Required</sup> <a name="TrainingFraction" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.trainingFraction"></a>

```go
func TrainingFraction() *f64
```

- *Type:* *f64

---

##### `WindowSize`<sup>Required</sup> <a name="WindowSize" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.windowSize"></a>

```go
func WindowSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAiAnomalyDetectionModelModelTrainingDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingDetails">DataOciAiAnomalyDetectionModelModelTrainingDetails</a>

---


### DataOciAiAnomalyDetectionModelModelTrainingResultsList <a name="DataOciAiAnomalyDetectionModelModelTrainingResultsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionmodel"

dataociaianomalydetectionmodel.NewDataOciAiAnomalyDetectionModelModelTrainingResultsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAiAnomalyDetectionModelModelTrainingResultsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.get"></a>

```go
func Get(index *f64) DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference <a name="DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionmodel"

dataociaianomalydetectionmodel.NewDataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.fap">Fap</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.isTrainingGoalAchieved">IsTrainingGoalAchieved</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.mae">Mae</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.maxInferenceSyncRows">MaxInferenceSyncRows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.multivariateFap">MultivariateFap</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.rmse">Rmse</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.rowReductionDetails">RowReductionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList">DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.signalDetails">SignalDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList">DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.warning">Warning</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.windowSize">WindowSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResults">DataOciAiAnomalyDetectionModelModelTrainingResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fap`<sup>Required</sup> <a name="Fap" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.fap"></a>

```go
func Fap() *f64
```

- *Type:* *f64

---

##### `IsTrainingGoalAchieved`<sup>Required</sup> <a name="IsTrainingGoalAchieved" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.isTrainingGoalAchieved"></a>

```go
func IsTrainingGoalAchieved() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Mae`<sup>Required</sup> <a name="Mae" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.mae"></a>

```go
func Mae() *f64
```

- *Type:* *f64

---

##### `MaxInferenceSyncRows`<sup>Required</sup> <a name="MaxInferenceSyncRows" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.maxInferenceSyncRows"></a>

```go
func MaxInferenceSyncRows() *f64
```

- *Type:* *f64

---

##### `MultivariateFap`<sup>Required</sup> <a name="MultivariateFap" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.multivariateFap"></a>

```go
func MultivariateFap() *f64
```

- *Type:* *f64

---

##### `Rmse`<sup>Required</sup> <a name="Rmse" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.rmse"></a>

```go
func Rmse() *f64
```

- *Type:* *f64

---

##### `RowReductionDetails`<sup>Required</sup> <a name="RowReductionDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.rowReductionDetails"></a>

```go
func RowReductionDetails() DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList">DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList</a>

---

##### `SignalDetails`<sup>Required</sup> <a name="SignalDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.signalDetails"></a>

```go
func SignalDetails() DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList">DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList</a>

---

##### `Warning`<sup>Required</sup> <a name="Warning" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.warning"></a>

```go
func Warning() *string
```

- *Type:* *string

---

##### `WindowSize`<sup>Required</sup> <a name="WindowSize" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.windowSize"></a>

```go
func WindowSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAiAnomalyDetectionModelModelTrainingResults
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResults">DataOciAiAnomalyDetectionModelModelTrainingResults</a>

---


### DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList <a name="DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionmodel"

dataociaianomalydetectionmodel.NewDataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.get"></a>

```go
func Get(index *f64) DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference <a name="DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionmodel"

dataociaianomalydetectionmodel.NewDataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.isReductionEnabled">IsReductionEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.reductionMethod">ReductionMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.reductionPercentage">ReductionPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetails">DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsReductionEnabled`<sup>Required</sup> <a name="IsReductionEnabled" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.isReductionEnabled"></a>

```go
func IsReductionEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ReductionMethod`<sup>Required</sup> <a name="ReductionMethod" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.reductionMethod"></a>

```go
func ReductionMethod() *string
```

- *Type:* *string

---

##### `ReductionPercentage`<sup>Required</sup> <a name="ReductionPercentage" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.reductionPercentage"></a>

```go
func ReductionPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetails">DataOciAiAnomalyDetectionModelModelTrainingResultsRowReductionDetails</a>

---


### DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList <a name="DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionmodel"

dataociaianomalydetectionmodel.NewDataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.get"></a>

```go
func Get(index *f64) DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference <a name="DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionmodel"

dataociaianomalydetectionmodel.NewDataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.details">Details</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.fap">Fap</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.isQuantized">IsQuantized</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.mviRatio">MviRatio</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.signalName">SignalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.std">Std</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetails">DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.details"></a>

```go
func Details() *string
```

- *Type:* *string

---

##### `Fap`<sup>Required</sup> <a name="Fap" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.fap"></a>

```go
func Fap() *f64
```

- *Type:* *f64

---

##### `IsQuantized`<sup>Required</sup> <a name="IsQuantized" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.isQuantized"></a>

```go
func IsQuantized() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `MviRatio`<sup>Required</sup> <a name="MviRatio" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.mviRatio"></a>

```go
func MviRatio() *f64
```

- *Type:* *f64

---

##### `SignalName`<sup>Required</sup> <a name="SignalName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.signalName"></a>

```go
func SignalName() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Std`<sup>Required</sup> <a name="Std" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.std"></a>

```go
func Std() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModel.DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetails">DataOciAiAnomalyDetectionModelModelTrainingResultsSignalDetails</a>

---




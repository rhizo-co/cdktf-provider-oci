# `dataOciAiAnomalyDetectionDataAsset` Submodule <a name="`dataOciAiAnomalyDetectionDataAsset` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAiAnomalyDetectionDataAsset <a name="DataOciAiAnomalyDetectionDataAsset" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_asset oci_ai_anomaly_detection_data_asset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondataasset"

dataociaianomalydetectiondataasset.NewDataOciAiAnomalyDetectionDataAsset(scope Construct, id *string, config DataOciAiAnomalyDetectionDataAssetConfig) DataOciAiAnomalyDetectionDataAsset
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig">DataOciAiAnomalyDetectionDataAssetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig">DataOciAiAnomalyDetectionDataAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAiAnomalyDetectionDataAsset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondataasset"

dataociaianomalydetectiondataasset.DataOciAiAnomalyDetectionDataAsset_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondataasset"

dataociaianomalydetectiondataasset.DataOciAiAnomalyDetectionDataAsset_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondataasset"

dataociaianomalydetectiondataasset.DataOciAiAnomalyDetectionDataAsset_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondataasset"

dataociaianomalydetectiondataasset.DataOciAiAnomalyDetectionDataAsset_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciAiAnomalyDetectionDataAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciAiAnomalyDetectionDataAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciAiAnomalyDetectionDataAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAiAnomalyDetectionDataAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.dataSourceDetails">DataSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList">DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.privateEndpointId">PrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.dataAssetIdInput">DataAssetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.dataAssetId">DataAssetId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DataSourceDetails`<sup>Required</sup> <a name="DataSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.dataSourceDetails"></a>

```go
func DataSourceDetails() DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList">DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.privateEndpointId"></a>

```go
func PrivateEndpointId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `DataAssetIdInput`<sup>Optional</sup> <a name="DataAssetIdInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.dataAssetIdInput"></a>

```go
func DataAssetIdInput() *string
```

- *Type:* *string

---

##### `DataAssetId`<sup>Required</sup> <a name="DataAssetId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.dataAssetId"></a>

```go
func DataAssetId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAsset.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAiAnomalyDetectionDataAssetConfig <a name="DataOciAiAnomalyDetectionDataAssetConfig" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondataasset"

&dataociaianomalydetectiondataasset.DataOciAiAnomalyDetectionDataAssetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataAssetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.dataAssetId">DataAssetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_asset#data_asset_id DataOciAiAnomalyDetectionDataAsset#data_asset_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataAssetId`<sup>Required</sup> <a name="DataAssetId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetConfig.property.dataAssetId"></a>

```go
DataAssetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_data_asset#data_asset_id DataOciAiAnomalyDetectionDataAsset#data_asset_id}.

---

### DataOciAiAnomalyDetectionDataAssetDataSourceDetails <a name="DataOciAiAnomalyDetectionDataAssetDataSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondataasset"

&dataociaianomalydetectiondataasset.DataOciAiAnomalyDetectionDataAssetDataSourceDetails {

}
```


### DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails <a name="DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondataasset"

&dataociaianomalydetectiondataasset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList <a name="DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondataasset"

dataociaianomalydetectiondataasset.NewDataOciAiAnomalyDetectionDataAssetDataSourceDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.get"></a>

```go
func Get(index *f64) DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference <a name="DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondataasset"

dataociaianomalydetectiondataasset.NewDataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpPasswordSecretId">AtpPasswordSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpUserName">AtpUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.cwalletFileSecretId">CwalletFileSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.dataSourceType">DataSourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ewalletFileSecretId">EwalletFileSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.keyStoreFileSecretId">KeyStoreFileSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.measurementName">MeasurementName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ojdbcFileSecretId">OjdbcFileSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tnsnamesFileSecretId">TnsnamesFileSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.truststoreFileSecretId">TruststoreFileSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.versionSpecificDetails">VersionSpecificDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList">DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.walletPasswordSecretId">WalletPasswordSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetails">DataOciAiAnomalyDetectionDataAssetDataSourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AtpPasswordSecretId`<sup>Required</sup> <a name="AtpPasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpPasswordSecretId"></a>

```go
func AtpPasswordSecretId() *string
```

- *Type:* *string

---

##### `AtpUserName`<sup>Required</sup> <a name="AtpUserName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpUserName"></a>

```go
func AtpUserName() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `CwalletFileSecretId`<sup>Required</sup> <a name="CwalletFileSecretId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.cwalletFileSecretId"></a>

```go
func CwalletFileSecretId() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DataSourceType`<sup>Required</sup> <a name="DataSourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.dataSourceType"></a>

```go
func DataSourceType() *string
```

- *Type:* *string

---

##### `EwalletFileSecretId`<sup>Required</sup> <a name="EwalletFileSecretId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ewalletFileSecretId"></a>

```go
func EwalletFileSecretId() *string
```

- *Type:* *string

---

##### `KeyStoreFileSecretId`<sup>Required</sup> <a name="KeyStoreFileSecretId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.keyStoreFileSecretId"></a>

```go
func KeyStoreFileSecretId() *string
```

- *Type:* *string

---

##### `MeasurementName`<sup>Required</sup> <a name="MeasurementName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.measurementName"></a>

```go
func MeasurementName() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `OjdbcFileSecretId`<sup>Required</sup> <a name="OjdbcFileSecretId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ojdbcFileSecretId"></a>

```go
func OjdbcFileSecretId() *string
```

- *Type:* *string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.passwordSecretId"></a>

```go
func PasswordSecretId() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `TnsnamesFileSecretId`<sup>Required</sup> <a name="TnsnamesFileSecretId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tnsnamesFileSecretId"></a>

```go
func TnsnamesFileSecretId() *string
```

- *Type:* *string

---

##### `TruststoreFileSecretId`<sup>Required</sup> <a name="TruststoreFileSecretId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.truststoreFileSecretId"></a>

```go
func TruststoreFileSecretId() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `VersionSpecificDetails`<sup>Required</sup> <a name="VersionSpecificDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.versionSpecificDetails"></a>

```go
func VersionSpecificDetails() DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList">DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList</a>

---

##### `WalletPasswordSecretId`<sup>Required</sup> <a name="WalletPasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.walletPasswordSecretId"></a>

```go
func WalletPasswordSecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAiAnomalyDetectionDataAssetDataSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetails">DataOciAiAnomalyDetectionDataAssetDataSourceDetails</a>

---


### DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList <a name="DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondataasset"

dataociaianomalydetectiondataasset.NewDataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.get"></a>

```go
func Get(index *f64) DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference <a name="DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectiondataasset"

dataociaianomalydetectiondataasset.NewDataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.influxVersion">InfluxVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.organizationName">OrganizationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.retentionPolicyName">RetentionPolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `InfluxVersion`<sup>Required</sup> <a name="InfluxVersion" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.influxVersion"></a>

```go
func InfluxVersion() *string
```

- *Type:* *string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.organizationName"></a>

```go
func OrganizationName() *string
```

- *Type:* *string

---

##### `RetentionPolicyName`<sup>Required</sup> <a name="RetentionPolicyName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.retentionPolicyName"></a>

```go
func RetentionPolicyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDataAsset.DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">DataOciAiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a>

---




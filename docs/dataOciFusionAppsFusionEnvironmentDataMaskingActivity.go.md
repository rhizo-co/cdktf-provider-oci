# `dataOciFusionAppsFusionEnvironmentDataMaskingActivity` Submodule <a name="`dataOciFusionAppsFusionEnvironmentDataMaskingActivity` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironmentDataMaskingActivity <a name="DataOciFusionAppsFusionEnvironmentDataMaskingActivity" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activity oci_fusion_apps_fusion_environment_data_masking_activity}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentdatamaskingactivity"

dataocifusionappsfusionenvironmentdatamaskingactivity.NewDataOciFusionAppsFusionEnvironmentDataMaskingActivity(scope Construct, id *string, config DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig) DataOciFusionAppsFusionEnvironmentDataMaskingActivity
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig">DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig">DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentDataMaskingActivity resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentdatamaskingactivity"

dataocifusionappsfusionenvironmentdatamaskingactivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentdatamaskingactivity"

dataocifusionappsfusionenvironmentdatamaskingactivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentdatamaskingactivity"

dataocifusionappsfusionenvironmentdatamaskingactivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentdatamaskingactivity"

dataocifusionappsfusionenvironmentdatamaskingactivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentDataMaskingActivity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentDataMaskingActivity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciFusionAppsFusionEnvironmentDataMaskingActivity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentDataMaskingActivity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.isResumeDataMasking">IsResumeDataMasking</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.timeMaskingFinish">TimeMaskingFinish</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.timeMaskingStart">TimeMaskingStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.dataMaskingActivityIdInput">DataMaskingActivityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.fusionEnvironmentIdInput">FusionEnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.dataMaskingActivityId">DataMaskingActivityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.fusionEnvironmentId">FusionEnvironmentId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsResumeDataMasking`<sup>Required</sup> <a name="IsResumeDataMasking" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.isResumeDataMasking"></a>

```go
func IsResumeDataMasking() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeMaskingFinish`<sup>Required</sup> <a name="TimeMaskingFinish" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.timeMaskingFinish"></a>

```go
func TimeMaskingFinish() *string
```

- *Type:* *string

---

##### `TimeMaskingStart`<sup>Required</sup> <a name="TimeMaskingStart" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.timeMaskingStart"></a>

```go
func TimeMaskingStart() *string
```

- *Type:* *string

---

##### `DataMaskingActivityIdInput`<sup>Optional</sup> <a name="DataMaskingActivityIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.dataMaskingActivityIdInput"></a>

```go
func DataMaskingActivityIdInput() *string
```

- *Type:* *string

---

##### `FusionEnvironmentIdInput`<sup>Optional</sup> <a name="FusionEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.fusionEnvironmentIdInput"></a>

```go
func FusionEnvironmentIdInput() *string
```

- *Type:* *string

---

##### `DataMaskingActivityId`<sup>Required</sup> <a name="DataMaskingActivityId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.dataMaskingActivityId"></a>

```go
func DataMaskingActivityId() *string
```

- *Type:* *string

---

##### `FusionEnvironmentId`<sup>Required</sup> <a name="FusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.fusionEnvironmentId"></a>

```go
func FusionEnvironmentId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig <a name="DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentdatamaskingactivity"

&dataocifusionappsfusionenvironmentdatamaskingactivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataMaskingActivityId: *string,
	FusionEnvironmentId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.dataMaskingActivityId">DataMaskingActivityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activity#data_masking_activity_id DataOciFusionAppsFusionEnvironmentDataMaskingActivity#data_masking_activity_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.fusionEnvironmentId">FusionEnvironmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activity#fusion_environment_id DataOciFusionAppsFusionEnvironmentDataMaskingActivity#fusion_environment_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataMaskingActivityId`<sup>Required</sup> <a name="DataMaskingActivityId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.dataMaskingActivityId"></a>

```go
DataMaskingActivityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activity#data_masking_activity_id DataOciFusionAppsFusionEnvironmentDataMaskingActivity#data_masking_activity_id}.

---

##### `FusionEnvironmentId`<sup>Required</sup> <a name="FusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.fusionEnvironmentId"></a>

```go
FusionEnvironmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activity#fusion_environment_id DataOciFusionAppsFusionEnvironmentDataMaskingActivity#fusion_environment_id}.

---




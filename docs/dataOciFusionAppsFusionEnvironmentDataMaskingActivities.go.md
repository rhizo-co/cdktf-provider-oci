# `dataOciFusionAppsFusionEnvironmentDataMaskingActivities` Submodule <a name="`dataOciFusionAppsFusionEnvironmentDataMaskingActivities` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironmentDataMaskingActivities <a name="DataOciFusionAppsFusionEnvironmentDataMaskingActivities" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities oci_fusion_apps_fusion_environment_data_masking_activities}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentdatamaskingactivities"

dataocifusionappsfusionenvironmentdatamaskingactivities.NewDataOciFusionAppsFusionEnvironmentDataMaskingActivities(scope Construct, id *string, config DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig) DataOciFusionAppsFusionEnvironmentDataMaskingActivities
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentDataMaskingActivities resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentdatamaskingactivities"

dataocifusionappsfusionenvironmentdatamaskingactivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentdatamaskingactivities"

dataocifusionappsfusionenvironmentdatamaskingactivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentdatamaskingactivities"

dataocifusionappsfusionenvironmentdatamaskingactivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentdatamaskingactivities"

dataocifusionappsfusionenvironmentdatamaskingactivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentDataMaskingActivities resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentDataMaskingActivities to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciFusionAppsFusionEnvironmentDataMaskingActivities that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentDataMaskingActivities to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.dataMaskingActivityCollection">DataMaskingActivityCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.fusionEnvironmentIdInput">FusionEnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.fusionEnvironmentId">FusionEnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DataMaskingActivityCollection`<sup>Required</sup> <a name="DataMaskingActivityCollection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.dataMaskingActivityCollection"></a>

```go
func DataMaskingActivityCollection() DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.filter"></a>

```go
func Filter() DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `FusionEnvironmentIdInput`<sup>Optional</sup> <a name="FusionEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.fusionEnvironmentIdInput"></a>

```go
func FusionEnvironmentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `FusionEnvironmentId`<sup>Required</sup> <a name="FusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.fusionEnvironmentId"></a>

```go
func FusionEnvironmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivities.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig <a name="DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentdatamaskingactivities"

&dataocifusionappsfusionenvironmentdatamaskingactivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FusionEnvironmentId: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.fusionEnvironmentId">FusionEnvironmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#fusion_environment_id DataOciFusionAppsFusionEnvironmentDataMaskingActivities#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#id DataOciFusionAppsFusionEnvironmentDataMaskingActivities#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#state DataOciFusionAppsFusionEnvironmentDataMaskingActivities#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FusionEnvironmentId`<sup>Required</sup> <a name="FusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.fusionEnvironmentId"></a>

```go
FusionEnvironmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#fusion_environment_id DataOciFusionAppsFusionEnvironmentDataMaskingActivities#fusion_environment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#filter DataOciFusionAppsFusionEnvironmentDataMaskingActivities#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#id DataOciFusionAppsFusionEnvironmentDataMaskingActivities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#state DataOciFusionAppsFusionEnvironmentDataMaskingActivities#state}.

---

### DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollection <a name="DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentdatamaskingactivities"

&dataocifusionappsfusionenvironmentdatamaskingactivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollection {

}
```


### DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItems <a name="DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentdatamaskingactivities"

&dataocifusionappsfusionenvironmentdatamaskingactivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItems {

}
```


### DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter <a name="DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentdatamaskingactivities"

&dataocifusionappsfusionenvironmentdatamaskingactivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#name DataOciFusionAppsFusionEnvironmentDataMaskingActivities#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#values DataOciFusionAppsFusionEnvironmentDataMaskingActivities#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#regex DataOciFusionAppsFusionEnvironmentDataMaskingActivities#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#name DataOciFusionAppsFusionEnvironmentDataMaskingActivities#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#values DataOciFusionAppsFusionEnvironmentDataMaskingActivities#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activities#regex DataOciFusionAppsFusionEnvironmentDataMaskingActivities#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList <a name="DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentdatamaskingactivities"

dataocifusionappsfusionenvironmentdatamaskingactivities.NewDataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference <a name="DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentdatamaskingactivities"

dataocifusionappsfusionenvironmentdatamaskingactivities.NewDataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.fusionEnvironmentId">FusionEnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.isResumeDataMasking">IsResumeDataMasking</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.timeMaskingFinish">TimeMaskingFinish</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.timeMaskingStart">TimeMaskingStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItems">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FusionEnvironmentId`<sup>Required</sup> <a name="FusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.fusionEnvironmentId"></a>

```go
func FusionEnvironmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsResumeDataMasking`<sup>Required</sup> <a name="IsResumeDataMasking" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.isResumeDataMasking"></a>

```go
func IsResumeDataMasking() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeMaskingFinish`<sup>Required</sup> <a name="TimeMaskingFinish" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.timeMaskingFinish"></a>

```go
func TimeMaskingFinish() *string
```

- *Type:* *string

---

##### `TimeMaskingStart`<sup>Required</sup> <a name="TimeMaskingStart" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.timeMaskingStart"></a>

```go
func TimeMaskingStart() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItems">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItems</a>

---


### DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList <a name="DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentdatamaskingactivities"

dataocifusionappsfusionenvironmentdatamaskingactivities.NewDataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.get"></a>

```go
func Get(index *f64) DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference <a name="DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentdatamaskingactivities"

dataocifusionappsfusionenvironmentdatamaskingactivities.NewDataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollection">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.property.items"></a>

```go
func Items() DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollection">DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesDataMaskingActivityCollection</a>

---


### DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList <a name="DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentdatamaskingactivities"

dataocifusionappsfusionenvironmentdatamaskingactivities.NewDataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.get"></a>

```go
func Get(index *f64) DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference <a name="DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentdatamaskingactivities"

dataocifusionappsfusionenvironmentdatamaskingactivities.NewDataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivities.DataOciFusionAppsFusionEnvironmentDataMaskingActivitiesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




# `dataOciAiAnomalyDetectionAiPrivateEndpoints` Submodule <a name="`dataOciAiAnomalyDetectionAiPrivateEndpoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAiAnomalyDetectionAiPrivateEndpoints <a name="DataOciAiAnomalyDetectionAiPrivateEndpoints" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints oci_ai_anomaly_detection_ai_private_endpoints}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionaiprivateendpoints"

dataociaianomalydetectionaiprivateendpoints.NewDataOciAiAnomalyDetectionAiPrivateEndpoints(scope Construct, id *string, config DataOciAiAnomalyDetectionAiPrivateEndpointsConfig) DataOciAiAnomalyDetectionAiPrivateEndpoints
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig">DataOciAiAnomalyDetectionAiPrivateEndpointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig">DataOciAiAnomalyDetectionAiPrivateEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAiAnomalyDetectionAiPrivateEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionaiprivateendpoints"

dataociaianomalydetectionaiprivateendpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionaiprivateendpoints"

dataociaianomalydetectionaiprivateendpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionaiprivateendpoints"

dataociaianomalydetectionaiprivateendpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionaiprivateendpoints"

dataociaianomalydetectionaiprivateendpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciAiAnomalyDetectionAiPrivateEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciAiAnomalyDetectionAiPrivateEndpoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciAiAnomalyDetectionAiPrivateEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAiAnomalyDetectionAiPrivateEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.aiPrivateEndpointCollection">AiPrivateEndpointCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList">DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList">DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AiPrivateEndpointCollection`<sup>Required</sup> <a name="AiPrivateEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.aiPrivateEndpointCollection"></a>

```go
func AiPrivateEndpointCollection() DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList">DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.filter"></a>

```go
func Filter() DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList">DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollection <a name="DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionaiprivateendpoints"

&dataociaianomalydetectionaiprivateendpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollection {

}
```


### DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItems <a name="DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionaiprivateendpoints"

&dataociaianomalydetectionaiprivateendpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItems {

}
```


### DataOciAiAnomalyDetectionAiPrivateEndpointsConfig <a name="DataOciAiAnomalyDetectionAiPrivateEndpointsConfig" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionaiprivateendpoints"

&dataociaianomalydetectionaiprivateendpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig {
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#compartment_id DataOciAiAnomalyDetectionAiPrivateEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#display_name DataOciAiAnomalyDetectionAiPrivateEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#id DataOciAiAnomalyDetectionAiPrivateEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#state DataOciAiAnomalyDetectionAiPrivateEndpoints#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#compartment_id DataOciAiAnomalyDetectionAiPrivateEndpoints#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#display_name DataOciAiAnomalyDetectionAiPrivateEndpoints#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#filter DataOciAiAnomalyDetectionAiPrivateEndpoints#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#id DataOciAiAnomalyDetectionAiPrivateEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#state DataOciAiAnomalyDetectionAiPrivateEndpoints#state}.

---

### DataOciAiAnomalyDetectionAiPrivateEndpointsFilter <a name="DataOciAiAnomalyDetectionAiPrivateEndpointsFilter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionaiprivateendpoints"

&dataociaianomalydetectionaiprivateendpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#name DataOciAiAnomalyDetectionAiPrivateEndpoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#values DataOciAiAnomalyDetectionAiPrivateEndpoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#regex DataOciAiAnomalyDetectionAiPrivateEndpoints#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#name DataOciAiAnomalyDetectionAiPrivateEndpoints#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#values DataOciAiAnomalyDetectionAiPrivateEndpoints#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#regex DataOciAiAnomalyDetectionAiPrivateEndpoints#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList <a name="DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionaiprivateendpoints"

dataociaianomalydetectionaiprivateendpoints.NewDataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference <a name="DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionaiprivateendpoints"

dataociaianomalydetectionaiprivateendpoints.NewDataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.attachedDataAssets">AttachedDataAssets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.dnsZones">DnsZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItems">DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttachedDataAssets`<sup>Required</sup> <a name="AttachedDataAssets" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.attachedDataAssets"></a>

```go
func AttachedDataAssets() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DnsZones`<sup>Required</sup> <a name="DnsZones" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.dnsZones"></a>

```go
func DnsZones() *[]*string
```

- *Type:* *[]*string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItems">DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItems</a>

---


### DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList <a name="DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionaiprivateendpoints"

dataociaianomalydetectionaiprivateendpoints.NewDataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.get"></a>

```go
func Get(index *f64) DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference <a name="DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionaiprivateendpoints"

dataociaianomalydetectionaiprivateendpoints.NewDataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList">DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollection">DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.property.items"></a>

```go
func Items() DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList">DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollection">DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollection</a>

---


### DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList <a name="DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionaiprivateendpoints"

dataociaianomalydetectionaiprivateendpoints.NewDataOciAiAnomalyDetectionAiPrivateEndpointsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.get"></a>

```go
func Get(index *f64) DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference <a name="DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociaianomalydetectionaiprivateendpoints"

dataociaianomalydetectionaiprivateendpoints.NewDataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




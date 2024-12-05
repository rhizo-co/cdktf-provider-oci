# `dataOciOpsiOperationsInsightsPrivateEndpoints` Submodule <a name="`dataOciOpsiOperationsInsightsPrivateEndpoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiOperationsInsightsPrivateEndpoints <a name="DataOciOpsiOperationsInsightsPrivateEndpoints" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints oci_opsi_operations_insights_private_endpoints}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightsprivateendpoints"

dataociopsioperationsinsightsprivateendpoints.NewDataOciOpsiOperationsInsightsPrivateEndpoints(scope Construct, id *string, config DataOciOpsiOperationsInsightsPrivateEndpointsConfig) DataOciOpsiOperationsInsightsPrivateEndpoints
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig">DataOciOpsiOperationsInsightsPrivateEndpointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig">DataOciOpsiOperationsInsightsPrivateEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetIsUsedForRacDbs">ResetIsUsedForRacDbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetOpsiPrivateEndpointId">ResetOpsiPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetVcnId">ResetVcnId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetCompartmentIdInSubtree"></a>

```go
func ResetCompartmentIdInSubtree()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetId"></a>

```go
func ResetId()
```

##### `ResetIsUsedForRacDbs` <a name="ResetIsUsedForRacDbs" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetIsUsedForRacDbs"></a>

```go
func ResetIsUsedForRacDbs()
```

##### `ResetOpsiPrivateEndpointId` <a name="ResetOpsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetOpsiPrivateEndpointId"></a>

```go
func ResetOpsiPrivateEndpointId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetState"></a>

```go
func ResetState()
```

##### `ResetVcnId` <a name="ResetVcnId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetVcnId"></a>

```go
func ResetVcnId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiOperationsInsightsPrivateEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightsprivateendpoints"

dataociopsioperationsinsightsprivateendpoints.DataOciOpsiOperationsInsightsPrivateEndpoints_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightsprivateendpoints"

dataociopsioperationsinsightsprivateendpoints.DataOciOpsiOperationsInsightsPrivateEndpoints_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightsprivateendpoints"

dataociopsioperationsinsightsprivateendpoints.DataOciOpsiOperationsInsightsPrivateEndpoints_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightsprivateendpoints"

dataociopsioperationsinsightsprivateendpoints.DataOciOpsiOperationsInsightsPrivateEndpoints_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOpsiOperationsInsightsPrivateEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOpsiOperationsInsightsPrivateEndpoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOpsiOperationsInsightsPrivateEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiOperationsInsightsPrivateEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList">DataOciOpsiOperationsInsightsPrivateEndpointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.operationsInsightsPrivateEndpointCollection">OperationsInsightsPrivateEndpointCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList">DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.isUsedForRacDbsInput">IsUsedForRacDbsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.opsiPrivateEndpointIdInput">OpsiPrivateEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.stateInput">StateInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.vcnIdInput">VcnIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.isUsedForRacDbs">IsUsedForRacDbs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.opsiPrivateEndpointId">OpsiPrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.state">State</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.vcnId">VcnId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.filter"></a>

```go
func Filter() DataOciOpsiOperationsInsightsPrivateEndpointsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList">DataOciOpsiOperationsInsightsPrivateEndpointsFilterList</a>

---

##### `OperationsInsightsPrivateEndpointCollection`<sup>Required</sup> <a name="OperationsInsightsPrivateEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.operationsInsightsPrivateEndpointCollection"></a>

```go
func OperationsInsightsPrivateEndpointCollection() DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList">DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsUsedForRacDbsInput`<sup>Optional</sup> <a name="IsUsedForRacDbsInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.isUsedForRacDbsInput"></a>

```go
func IsUsedForRacDbsInput() interface{}
```

- *Type:* interface{}

---

##### `OpsiPrivateEndpointIdInput`<sup>Optional</sup> <a name="OpsiPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.opsiPrivateEndpointIdInput"></a>

```go
func OpsiPrivateEndpointIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.stateInput"></a>

```go
func StateInput() *[]*string
```

- *Type:* *[]*string

---

##### `VcnIdInput`<sup>Optional</sup> <a name="VcnIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.vcnIdInput"></a>

```go
func VcnIdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsUsedForRacDbs`<sup>Required</sup> <a name="IsUsedForRacDbs" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.isUsedForRacDbs"></a>

```go
func IsUsedForRacDbs() interface{}
```

- *Type:* interface{}

---

##### `OpsiPrivateEndpointId`<sup>Required</sup> <a name="OpsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.opsiPrivateEndpointId"></a>

```go
func OpsiPrivateEndpointId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.state"></a>

```go
func State() *[]*string
```

- *Type:* *[]*string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.vcnId"></a>

```go
func VcnId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiOperationsInsightsPrivateEndpointsConfig <a name="DataOciOpsiOperationsInsightsPrivateEndpointsConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightsprivateendpoints"

&dataociopsioperationsinsightsprivateendpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	CompartmentIdInSubtree: interface{},
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	IsUsedForRacDbs: interface{},
	OpsiPrivateEndpointId: *string,
	State: *[]*string,
	VcnId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#compartment_id DataOciOpsiOperationsInsightsPrivateEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#compartment_id_in_subtree DataOciOpsiOperationsInsightsPrivateEndpoints#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#display_name DataOciOpsiOperationsInsightsPrivateEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#id DataOciOpsiOperationsInsightsPrivateEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.isUsedForRacDbs">IsUsedForRacDbs</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#is_used_for_rac_dbs DataOciOpsiOperationsInsightsPrivateEndpoints#is_used_for_rac_dbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.opsiPrivateEndpointId">OpsiPrivateEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#opsi_private_endpoint_id DataOciOpsiOperationsInsightsPrivateEndpoints#opsi_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.state">State</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#state DataOciOpsiOperationsInsightsPrivateEndpoints#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.vcnId">VcnId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#vcn_id DataOciOpsiOperationsInsightsPrivateEndpoints#vcn_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#compartment_id DataOciOpsiOperationsInsightsPrivateEndpoints#compartment_id}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#compartment_id_in_subtree DataOciOpsiOperationsInsightsPrivateEndpoints#compartment_id_in_subtree}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#display_name DataOciOpsiOperationsInsightsPrivateEndpoints#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#filter DataOciOpsiOperationsInsightsPrivateEndpoints#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#id DataOciOpsiOperationsInsightsPrivateEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsUsedForRacDbs`<sup>Optional</sup> <a name="IsUsedForRacDbs" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.isUsedForRacDbs"></a>

```go
IsUsedForRacDbs interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#is_used_for_rac_dbs DataOciOpsiOperationsInsightsPrivateEndpoints#is_used_for_rac_dbs}.

---

##### `OpsiPrivateEndpointId`<sup>Optional</sup> <a name="OpsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.opsiPrivateEndpointId"></a>

```go
OpsiPrivateEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#opsi_private_endpoint_id DataOciOpsiOperationsInsightsPrivateEndpoints#opsi_private_endpoint_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.state"></a>

```go
State *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#state DataOciOpsiOperationsInsightsPrivateEndpoints#state}.

---

##### `VcnId`<sup>Optional</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.vcnId"></a>

```go
VcnId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#vcn_id DataOciOpsiOperationsInsightsPrivateEndpoints#vcn_id}.

---

### DataOciOpsiOperationsInsightsPrivateEndpointsFilter <a name="DataOciOpsiOperationsInsightsPrivateEndpointsFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightsprivateendpoints"

&dataociopsioperationsinsightsprivateendpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#name DataOciOpsiOperationsInsightsPrivateEndpoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#values DataOciOpsiOperationsInsightsPrivateEndpoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#regex DataOciOpsiOperationsInsightsPrivateEndpoints#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#name DataOciOpsiOperationsInsightsPrivateEndpoints#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#values DataOciOpsiOperationsInsightsPrivateEndpoints#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#regex DataOciOpsiOperationsInsightsPrivateEndpoints#regex}.

---

### DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollection <a name="DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightsprivateendpoints"

&dataociopsioperationsinsightsprivateendpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollection {

}
```


### DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItems <a name="DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightsprivateendpoints"

&dataociopsioperationsinsightsprivateendpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiOperationsInsightsPrivateEndpointsFilterList <a name="DataOciOpsiOperationsInsightsPrivateEndpointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightsprivateendpoints"

dataociopsioperationsinsightsprivateendpoints.NewDataOciOpsiOperationsInsightsPrivateEndpointsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiOperationsInsightsPrivateEndpointsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.get"></a>

```go
func Get(index *f64) DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference <a name="DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightsprivateendpoints"

dataociopsioperationsinsightsprivateendpoints.NewDataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList <a name="DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightsprivateendpoints"

dataociopsioperationsinsightsprivateendpoints.NewDataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference <a name="DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightsprivateendpoints"

dataociopsioperationsinsightsprivateendpoints.NewDataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.isUsedForRacDbs">IsUsedForRacDbs</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.privateEndpointStatusDetails">PrivateEndpointStatusDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.vcnId">VcnId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItems">DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsUsedForRacDbs`<sup>Required</sup> <a name="IsUsedForRacDbs" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.isUsedForRacDbs"></a>

```go
func IsUsedForRacDbs() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateEndpointStatusDetails`<sup>Required</sup> <a name="PrivateEndpointStatusDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.privateEndpointStatusDetails"></a>

```go
func PrivateEndpointStatusDetails() *string
```

- *Type:* *string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.vcnId"></a>

```go
func VcnId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItems">DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItems</a>

---


### DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList <a name="DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightsprivateendpoints"

dataociopsioperationsinsightsprivateendpoints.NewDataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.get"></a>

```go
func Get(index *f64) DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference <a name="DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsioperationsinsightsprivateendpoints"

dataociopsioperationsinsightsprivateendpoints.NewDataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList">DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollection">DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.property.items"></a>

```go
func Items() DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList">DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollection">DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollection</a>

---




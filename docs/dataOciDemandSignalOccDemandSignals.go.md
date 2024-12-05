# `dataOciDemandSignalOccDemandSignals` Submodule <a name="`dataOciDemandSignalOccDemandSignals` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDemandSignalOccDemandSignals <a name="DataOciDemandSignalOccDemandSignals" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals oci_demand_signal_occ_demand_signals}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidemandsignaloccdemandsignals"

dataocidemandsignaloccdemandsignals.NewDataOciDemandSignalOccDemandSignals(scope Construct, id *string, config DataOciDemandSignalOccDemandSignalsConfig) DataOciDemandSignalOccDemandSignals
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig">DataOciDemandSignalOccDemandSignalsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig">DataOciDemandSignalOccDemandSignalsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDemandSignalOccDemandSignals resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidemandsignaloccdemandsignals"

dataocidemandsignaloccdemandsignals.DataOciDemandSignalOccDemandSignals_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidemandsignaloccdemandsignals"

dataocidemandsignaloccdemandsignals.DataOciDemandSignalOccDemandSignals_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidemandsignaloccdemandsignals"

dataocidemandsignaloccdemandsignals.DataOciDemandSignalOccDemandSignals_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidemandsignaloccdemandsignals"

dataocidemandsignaloccdemandsignals.DataOciDemandSignalOccDemandSignals_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDemandSignalOccDemandSignals resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDemandSignalOccDemandSignals to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDemandSignalOccDemandSignals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDemandSignalOccDemandSignals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList">DataOciDemandSignalOccDemandSignalsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.occDemandSignalCollection">OccDemandSignalCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.filter"></a>

```go
func Filter() DataOciDemandSignalOccDemandSignalsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList">DataOciDemandSignalOccDemandSignalsFilterList</a>

---

##### `OccDemandSignalCollection`<sup>Required</sup> <a name="OccDemandSignalCollection" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.occDemandSignalCollection"></a>

```go
func OccDemandSignalCollection() DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDemandSignalOccDemandSignalsConfig <a name="DataOciDemandSignalOccDemandSignalsConfig" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidemandsignaloccdemandsignals"

&dataocidemandsignaloccdemandsignals.DataOciDemandSignalOccDemandSignalsConfig {
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#compartment_id DataOciDemandSignalOccDemandSignals#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#display_name DataOciDemandSignalOccDemandSignals#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#id DataOciDemandSignalOccDemandSignals#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#state DataOciDemandSignalOccDemandSignals#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#compartment_id DataOciDemandSignalOccDemandSignals#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#display_name DataOciDemandSignalOccDemandSignals#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#filter DataOciDemandSignalOccDemandSignals#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#id DataOciDemandSignalOccDemandSignals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#state DataOciDemandSignalOccDemandSignals#state}.

---

### DataOciDemandSignalOccDemandSignalsFilter <a name="DataOciDemandSignalOccDemandSignalsFilter" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidemandsignaloccdemandsignals"

&dataocidemandsignaloccdemandsignals.DataOciDemandSignalOccDemandSignalsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#name DataOciDemandSignalOccDemandSignals#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#values DataOciDemandSignalOccDemandSignals#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#regex DataOciDemandSignalOccDemandSignals#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#name DataOciDemandSignalOccDemandSignals#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#values DataOciDemandSignalOccDemandSignals#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#regex DataOciDemandSignalOccDemandSignals#regex}.

---

### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidemandsignaloccdemandsignals"

&dataocidemandsignaloccdemandsignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection {

}
```


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidemandsignaloccdemandsignals"

&dataocidemandsignaloccdemandsignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems {

}
```


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidemandsignaloccdemandsignals"

&dataocidemandsignaloccdemandsignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals {

}
```


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidemandsignaloccdemandsignals"

&dataocidemandsignaloccdemandsignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues {

}
```


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidemandsignaloccdemandsignals"

&dataocidemandsignaloccdemandsignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDemandSignalOccDemandSignalsFilterList <a name="DataOciDemandSignalOccDemandSignalsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidemandsignaloccdemandsignals"

dataocidemandsignaloccdemandsignals.NewDataOciDemandSignalOccDemandSignalsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDemandSignalOccDemandSignalsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.get"></a>

```go
func Get(index *f64) DataOciDemandSignalOccDemandSignalsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDemandSignalOccDemandSignalsFilterOutputReference <a name="DataOciDemandSignalOccDemandSignalsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidemandsignaloccdemandsignals"

dataocidemandsignaloccdemandsignals.NewDataOciDemandSignalOccDemandSignalsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDemandSignalOccDemandSignalsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidemandsignaloccdemandsignals"

dataocidemandsignaloccdemandsignals.NewDataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidemandsignaloccdemandsignals"

dataocidemandsignaloccdemandsignals.NewDataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.get"></a>

```go
func Get(index *f64) DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidemandsignaloccdemandsignals"

dataocidemandsignaloccdemandsignals.NewDataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.units">Units</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.values">Values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Units`<sup>Required</sup> <a name="Units" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.units"></a>

```go
func Units() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.values"></a>

```go
func Values() DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals</a>

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidemandsignaloccdemandsignals"

dataocidemandsignaloccdemandsignals.NewDataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.get"></a>

```go
func Get(index *f64) DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidemandsignaloccdemandsignals"

dataocidemandsignaloccdemandsignals.NewDataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.comments">Comments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.timeExpected">TimeExpected</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comments`<sup>Required</sup> <a name="Comments" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.comments"></a>

```go
func Comments() *string
```

- *Type:* *string

---

##### `TimeExpected`<sup>Required</sup> <a name="TimeExpected" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.timeExpected"></a>

```go
func TimeExpected() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues</a>

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidemandsignaloccdemandsignals"

dataocidemandsignaloccdemandsignals.NewDataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.isActive">IsActive</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.occDemandSignalId">OccDemandSignalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.occDemandSignals">OccDemandSignals</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.patchOperations">PatchOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.isActive"></a>

```go
func IsActive() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `OccDemandSignalId`<sup>Required</sup> <a name="OccDemandSignalId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.occDemandSignalId"></a>

```go
func OccDemandSignalId() *string
```

- *Type:* *string

---

##### `OccDemandSignals`<sup>Required</sup> <a name="OccDemandSignals" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.occDemandSignals"></a>

```go
func OccDemandSignals() DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList</a>

---

##### `PatchOperations`<sup>Required</sup> <a name="PatchOperations" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.patchOperations"></a>

```go
func PatchOperations() DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems</a>

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidemandsignaloccdemandsignals"

dataocidemandsignaloccdemandsignals.NewDataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.get"></a>

```go
func Get(index *f64) DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidemandsignaloccdemandsignals"

dataocidemandsignaloccdemandsignals.NewDataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.operation">Operation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.position">Position</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.selectedItem">SelectedItem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.selection">Selection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.value">Value</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.operation"></a>

```go
func Operation() *string
```

- *Type:* *string

---

##### `Position`<sup>Required</sup> <a name="Position" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.position"></a>

```go
func Position() *string
```

- *Type:* *string

---

##### `SelectedItem`<sup>Required</sup> <a name="SelectedItem" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.selectedItem"></a>

```go
func SelectedItem() *string
```

- *Type:* *string

---

##### `Selection`<sup>Required</sup> <a name="Selection" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.selection"></a>

```go
func Selection() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.value"></a>

```go
func Value() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations</a>

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidemandsignaloccdemandsignals"

dataocidemandsignaloccdemandsignals.NewDataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.get"></a>

```go
func Get(index *f64) DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidemandsignaloccdemandsignals"

dataocidemandsignaloccdemandsignals.NewDataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection</a>

---




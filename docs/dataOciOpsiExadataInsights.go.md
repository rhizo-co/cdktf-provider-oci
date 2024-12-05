# `dataOciOpsiExadataInsights` Submodule <a name="`dataOciOpsiExadataInsights` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiExadataInsights <a name="DataOciOpsiExadataInsights" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_exadata_insights oci_opsi_exadata_insights}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

dataociopsiexadatainsights.NewDataOciOpsiExadataInsights(scope Construct, id *string, config DataOciOpsiExadataInsightsConfig) DataOciOpsiExadataInsights
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig">DataOciOpsiExadataInsightsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig">DataOciOpsiExadataInsightsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.resetEnterpriseManagerBridgeId">ResetEnterpriseManagerBridgeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.resetExadataType">ResetExadataType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.resetCompartmentIdInSubtree"></a>

```go
func ResetCompartmentIdInSubtree()
```

##### `ResetEnterpriseManagerBridgeId` <a name="ResetEnterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.resetEnterpriseManagerBridgeId"></a>

```go
func ResetEnterpriseManagerBridgeId()
```

##### `ResetExadataType` <a name="ResetExadataType" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.resetExadataType"></a>

```go
func ResetExadataType()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.resetState"></a>

```go
func ResetState()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.resetStatus"></a>

```go
func ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiExadataInsights resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

dataociopsiexadatainsights.DataOciOpsiExadataInsights_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

dataociopsiexadatainsights.DataOciOpsiExadataInsights_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

dataociopsiexadatainsights.DataOciOpsiExadataInsights_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

dataociopsiexadatainsights.DataOciOpsiExadataInsights_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOpsiExadataInsights resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOpsiExadataInsights to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOpsiExadataInsights that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_exadata_insights#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiExadataInsights to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.exadataInsightSummaryCollection">ExadataInsightSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList">DataOciOpsiExadataInsightsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.enterpriseManagerBridgeIdInput">EnterpriseManagerBridgeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.exadataTypeInput">ExadataTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.stateInput">StateInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.statusInput">StatusInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.enterpriseManagerBridgeId">EnterpriseManagerBridgeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.exadataType">ExadataType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.state">State</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.status">Status</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ExadataInsightSummaryCollection`<sup>Required</sup> <a name="ExadataInsightSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.exadataInsightSummaryCollection"></a>

```go
func ExadataInsightSummaryCollection() DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.filter"></a>

```go
func Filter() DataOciOpsiExadataInsightsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList">DataOciOpsiExadataInsightsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `EnterpriseManagerBridgeIdInput`<sup>Optional</sup> <a name="EnterpriseManagerBridgeIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.enterpriseManagerBridgeIdInput"></a>

```go
func EnterpriseManagerBridgeIdInput() *string
```

- *Type:* *string

---

##### `ExadataTypeInput`<sup>Optional</sup> <a name="ExadataTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.exadataTypeInput"></a>

```go
func ExadataTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.stateInput"></a>

```go
func StateInput() *[]*string
```

- *Type:* *[]*string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.statusInput"></a>

```go
func StatusInput() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `EnterpriseManagerBridgeId`<sup>Required</sup> <a name="EnterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.enterpriseManagerBridgeId"></a>

```go
func EnterpriseManagerBridgeId() *string
```

- *Type:* *string

---

##### `ExadataType`<sup>Required</sup> <a name="ExadataType" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.exadataType"></a>

```go
func ExadataType() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.state"></a>

```go
func State() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.status"></a>

```go
func Status() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsights.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiExadataInsightsConfig <a name="DataOciOpsiExadataInsightsConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

&dataociopsiexadatainsights.DataOciOpsiExadataInsightsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	CompartmentIdInSubtree: interface{},
	EnterpriseManagerBridgeId: *string,
	ExadataType: *[]*string,
	Filter: interface{},
	Id: *string,
	State: *[]*string,
	Status: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_exadata_insights#compartment_id DataOciOpsiExadataInsights#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_exadata_insights#compartment_id_in_subtree DataOciOpsiExadataInsights#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.enterpriseManagerBridgeId">EnterpriseManagerBridgeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_exadata_insights#enterprise_manager_bridge_id DataOciOpsiExadataInsights#enterprise_manager_bridge_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.exadataType">ExadataType</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_exadata_insights#exadata_type DataOciOpsiExadataInsights#exadata_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_exadata_insights#id DataOciOpsiExadataInsights#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.state">State</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_exadata_insights#state DataOciOpsiExadataInsights#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.status">Status</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_exadata_insights#status DataOciOpsiExadataInsights#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_exadata_insights#compartment_id DataOciOpsiExadataInsights#compartment_id}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_exadata_insights#compartment_id_in_subtree DataOciOpsiExadataInsights#compartment_id_in_subtree}.

---

##### `EnterpriseManagerBridgeId`<sup>Optional</sup> <a name="EnterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.enterpriseManagerBridgeId"></a>

```go
EnterpriseManagerBridgeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_exadata_insights#enterprise_manager_bridge_id DataOciOpsiExadataInsights#enterprise_manager_bridge_id}.

---

##### `ExadataType`<sup>Optional</sup> <a name="ExadataType" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.exadataType"></a>

```go
ExadataType *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_exadata_insights#exadata_type DataOciOpsiExadataInsights#exadata_type}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_exadata_insights#filter DataOciOpsiExadataInsights#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_exadata_insights#id DataOciOpsiExadataInsights#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.state"></a>

```go
State *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_exadata_insights#state DataOciOpsiExadataInsights#state}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsConfig.property.status"></a>

```go
Status *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_exadata_insights#status DataOciOpsiExadataInsights#status}.

---

### DataOciOpsiExadataInsightsExadataInsightSummaryCollection <a name="DataOciOpsiExadataInsightsExadataInsightSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

&dataociopsiexadatainsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollection {

}
```


### DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItems <a name="DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

&dataociopsiexadatainsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItems {

}
```


### DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetails <a name="DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

&dataociopsiexadatainsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetails {

}
```


### DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetails <a name="DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

&dataociopsiexadatainsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetails {

}
```


### DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails <a name="DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

&dataociopsiexadatainsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails {

}
```


### DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails <a name="DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

&dataociopsiexadatainsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails {

}
```


### DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts <a name="DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

&dataociopsiexadatainsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts {

}
```


### DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails <a name="DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

&dataociopsiexadatainsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails {

}
```


### DataOciOpsiExadataInsightsFilter <a name="DataOciOpsiExadataInsightsFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

&dataociopsiexadatainsights.DataOciOpsiExadataInsightsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_exadata_insights#name DataOciOpsiExadataInsights#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_exadata_insights#values DataOciOpsiExadataInsights#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_exadata_insights#regex DataOciOpsiExadataInsights#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_exadata_insights#name DataOciOpsiExadataInsights#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_exadata_insights#values DataOciOpsiExadataInsights#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_exadata_insights#regex DataOciOpsiExadataInsights#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList <a name="DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

dataociopsiexadatainsights.NewDataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList <a name="DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

dataociopsiexadatainsights.NewDataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList.get"></a>

```go
func Get(index *f64) DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList <a name="DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

dataociopsiexadatainsights.NewDataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.get"></a>

```go
func Get(index *f64) DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference <a name="DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

dataociopsiexadatainsights.NewDataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.credentialSourceName">CredentialSourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.credentialType">CredentialType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.walletSecretId">WalletSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CredentialSourceName`<sup>Required</sup> <a name="CredentialSourceName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.credentialSourceName"></a>

```go
func CredentialSourceName() *string
```

- *Type:* *string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.credentialType"></a>

```go
func CredentialType() *string
```

- *Type:* *string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.passwordSecretId"></a>

```go
func PasswordSecretId() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `WalletSecretId`<sup>Required</sup> <a name="WalletSecretId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.walletSecretId"></a>

```go
func WalletSecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails</a>

---


### DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList <a name="DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

dataociopsiexadatainsights.NewDataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.get"></a>

```go
func Get(index *f64) DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference <a name="DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

dataociopsiexadatainsights.NewDataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.hostIp">HostIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostIp`<sup>Required</sup> <a name="HostIp" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.hostIp"></a>

```go
func HostIp() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts</a>

---


### DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList <a name="DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

dataociopsiexadatainsights.NewDataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.get"></a>

```go
func Get(index *f64) DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference <a name="DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

dataociopsiexadatainsights.NewDataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.hosts">Hosts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.hosts"></a>

```go
func Hosts() DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails</a>

---


### DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList <a name="DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

dataociopsiexadatainsights.NewDataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.get"></a>

```go
func Get(index *f64) DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference <a name="DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

dataociopsiexadatainsights.NewDataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.credentialSourceName">CredentialSourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.credentialType">CredentialType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.walletSecretId">WalletSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CredentialSourceName`<sup>Required</sup> <a name="CredentialSourceName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.credentialSourceName"></a>

```go
func CredentialSourceName() *string
```

- *Type:* *string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.credentialType"></a>

```go
func CredentialType() *string
```

- *Type:* *string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.passwordSecretId"></a>

```go
func PasswordSecretId() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `WalletSecretId`<sup>Required</sup> <a name="WalletSecretId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.walletSecretId"></a>

```go
func WalletSecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails</a>

---


### DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList <a name="DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

dataociopsiexadatainsights.NewDataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList.get"></a>

```go
func Get(index *f64) DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference <a name="DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

dataociopsiexadatainsights.NewDataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.connectionCredentialDetails">ConnectionCredentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.connectionDetails">ConnectionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.credentialDetails">CredentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.databaseId">DatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.databaseResourceType">DatabaseResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.dbmPrivateEndpointId">DbmPrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.entitySource">EntitySource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.managementAgentId">ManagementAgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.opsiPrivateEndpointId">OpsiPrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetails">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConnectionCredentialDetails`<sup>Required</sup> <a name="ConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.connectionCredentialDetails"></a>

```go
func ConnectionCredentialDetails() DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList</a>

---

##### `ConnectionDetails`<sup>Required</sup> <a name="ConnectionDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.connectionDetails"></a>

```go
func ConnectionDetails() DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList</a>

---

##### `CredentialDetails`<sup>Required</sup> <a name="CredentialDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.credentialDetails"></a>

```go
func CredentialDetails() DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList</a>

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.databaseId"></a>

```go
func DatabaseId() *string
```

- *Type:* *string

---

##### `DatabaseResourceType`<sup>Required</sup> <a name="DatabaseResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.databaseResourceType"></a>

```go
func DatabaseResourceType() *string
```

- *Type:* *string

---

##### `DbmPrivateEndpointId`<sup>Required</sup> <a name="DbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.dbmPrivateEndpointId"></a>

```go
func DbmPrivateEndpointId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.deploymentType"></a>

```go
func DeploymentType() *string
```

- *Type:* *string

---

##### `EntitySource`<sup>Required</sup> <a name="EntitySource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.entitySource"></a>

```go
func EntitySource() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.managementAgentId"></a>

```go
func ManagementAgentId() *string
```

- *Type:* *string

---

##### `OpsiPrivateEndpointId`<sup>Required</sup> <a name="OpsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.opsiPrivateEndpointId"></a>

```go
func OpsiPrivateEndpointId() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetails">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetails</a>

---


### DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference <a name="DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

dataociopsiexadatainsights.NewDataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.property.dbmPrivateEndpointId">DbmPrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.property.memberDatabaseDetails">MemberDatabaseDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.property.opsiPrivateEndpointId">OpsiPrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.property.vmclusterId">VmclusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.property.vmClusterType">VmClusterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetails">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DbmPrivateEndpointId`<sup>Required</sup> <a name="DbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.property.dbmPrivateEndpointId"></a>

```go
func DbmPrivateEndpointId() *string
```

- *Type:* *string

---

##### `MemberDatabaseDetails`<sup>Required</sup> <a name="MemberDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.property.memberDatabaseDetails"></a>

```go
func MemberDatabaseDetails() DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList</a>

---

##### `OpsiPrivateEndpointId`<sup>Required</sup> <a name="OpsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.property.opsiPrivateEndpointId"></a>

```go
func OpsiPrivateEndpointId() *string
```

- *Type:* *string

---

##### `VmclusterId`<sup>Required</sup> <a name="VmclusterId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.property.vmclusterId"></a>

```go
func VmclusterId() *string
```

- *Type:* *string

---

##### `VmClusterType`<sup>Required</sup> <a name="VmClusterType" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.property.vmClusterType"></a>

```go
func VmClusterType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetails">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetails</a>

---


### DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference <a name="DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

dataociopsiexadatainsights.NewDataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.enterpriseManagerBridgeId">EnterpriseManagerBridgeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.enterpriseManagerEntityDisplayName">EnterpriseManagerEntityDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.enterpriseManagerEntityIdentifier">EnterpriseManagerEntityIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.enterpriseManagerEntityName">EnterpriseManagerEntityName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.enterpriseManagerEntityType">EnterpriseManagerEntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.enterpriseManagerIdentifier">EnterpriseManagerIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.entitySource">EntitySource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.exadataDisplayName">ExadataDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.exadataInfraId">ExadataInfraId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.exadataInfraResourceType">ExadataInfraResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.exadataName">ExadataName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.exadataRackType">ExadataRackType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.exadataShape">ExadataShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.exadataType">ExadataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.isAutoSyncEnabled">IsAutoSyncEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.isVirtualizedExadata">IsVirtualizedExadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.memberVmClusterDetails">MemberVmClusterDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItems">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EnterpriseManagerBridgeId`<sup>Required</sup> <a name="EnterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.enterpriseManagerBridgeId"></a>

```go
func EnterpriseManagerBridgeId() *string
```

- *Type:* *string

---

##### `EnterpriseManagerEntityDisplayName`<sup>Required</sup> <a name="EnterpriseManagerEntityDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.enterpriseManagerEntityDisplayName"></a>

```go
func EnterpriseManagerEntityDisplayName() *string
```

- *Type:* *string

---

##### `EnterpriseManagerEntityIdentifier`<sup>Required</sup> <a name="EnterpriseManagerEntityIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.enterpriseManagerEntityIdentifier"></a>

```go
func EnterpriseManagerEntityIdentifier() *string
```

- *Type:* *string

---

##### `EnterpriseManagerEntityName`<sup>Required</sup> <a name="EnterpriseManagerEntityName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.enterpriseManagerEntityName"></a>

```go
func EnterpriseManagerEntityName() *string
```

- *Type:* *string

---

##### `EnterpriseManagerEntityType`<sup>Required</sup> <a name="EnterpriseManagerEntityType" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.enterpriseManagerEntityType"></a>

```go
func EnterpriseManagerEntityType() *string
```

- *Type:* *string

---

##### `EnterpriseManagerIdentifier`<sup>Required</sup> <a name="EnterpriseManagerIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.enterpriseManagerIdentifier"></a>

```go
func EnterpriseManagerIdentifier() *string
```

- *Type:* *string

---

##### `EntitySource`<sup>Required</sup> <a name="EntitySource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.entitySource"></a>

```go
func EntitySource() *string
```

- *Type:* *string

---

##### `ExadataDisplayName`<sup>Required</sup> <a name="ExadataDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.exadataDisplayName"></a>

```go
func ExadataDisplayName() *string
```

- *Type:* *string

---

##### `ExadataInfraId`<sup>Required</sup> <a name="ExadataInfraId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.exadataInfraId"></a>

```go
func ExadataInfraId() *string
```

- *Type:* *string

---

##### `ExadataInfraResourceType`<sup>Required</sup> <a name="ExadataInfraResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.exadataInfraResourceType"></a>

```go
func ExadataInfraResourceType() *string
```

- *Type:* *string

---

##### `ExadataName`<sup>Required</sup> <a name="ExadataName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.exadataName"></a>

```go
func ExadataName() *string
```

- *Type:* *string

---

##### `ExadataRackType`<sup>Required</sup> <a name="ExadataRackType" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.exadataRackType"></a>

```go
func ExadataRackType() *string
```

- *Type:* *string

---

##### `ExadataShape`<sup>Required</sup> <a name="ExadataShape" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.exadataShape"></a>

```go
func ExadataShape() *string
```

- *Type:* *string

---

##### `ExadataType`<sup>Required</sup> <a name="ExadataType" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.exadataType"></a>

```go
func ExadataType() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsAutoSyncEnabled`<sup>Required</sup> <a name="IsAutoSyncEnabled" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.isAutoSyncEnabled"></a>

```go
func IsAutoSyncEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsVirtualizedExadata`<sup>Required</sup> <a name="IsVirtualizedExadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.isVirtualizedExadata"></a>

```go
func IsVirtualizedExadata() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `MemberVmClusterDetails`<sup>Required</sup> <a name="MemberVmClusterDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.memberVmClusterDetails"></a>

```go
func MemberVmClusterDetails() DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItems">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItems</a>

---


### DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList <a name="DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

dataociopsiexadatainsights.NewDataOciOpsiExadataInsightsExadataInsightSummaryCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList.get"></a>

```go
func Get(index *f64) DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference <a name="DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

dataociopsiexadatainsights.NewDataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollection">DataOciOpsiExadataInsightsExadataInsightSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.property.items"></a>

```go
func Items() DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList">DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOpsiExadataInsightsExadataInsightSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsExadataInsightSummaryCollection">DataOciOpsiExadataInsightsExadataInsightSummaryCollection</a>

---


### DataOciOpsiExadataInsightsFilterList <a name="DataOciOpsiExadataInsightsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

dataociopsiexadatainsights.NewDataOciOpsiExadataInsightsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiExadataInsightsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList.get"></a>

```go
func Get(index *f64) DataOciOpsiExadataInsightsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOpsiExadataInsightsFilterOutputReference <a name="DataOciOpsiExadataInsightsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsights"

dataociopsiexadatainsights.NewDataOciOpsiExadataInsightsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiExadataInsightsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsights.DataOciOpsiExadataInsightsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




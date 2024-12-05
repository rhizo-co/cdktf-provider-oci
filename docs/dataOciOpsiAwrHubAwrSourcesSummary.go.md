# `dataOciOpsiAwrHubAwrSourcesSummary` Submodule <a name="`dataOciOpsiAwrHubAwrSourcesSummary` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiAwrHubAwrSourcesSummary <a name="DataOciOpsiAwrHubAwrSourcesSummary" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary oci_opsi_awr_hub_awr_sources_summary}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiawrhubawrsourcessummary"

dataociopsiawrhubawrsourcessummary.NewDataOciOpsiAwrHubAwrSourcesSummary(scope Construct, id *string, config DataOciOpsiAwrHubAwrSourcesSummaryConfig) DataOciOpsiAwrHubAwrSourcesSummary
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig">DataOciOpsiAwrHubAwrSourcesSummaryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig">DataOciOpsiAwrHubAwrSourcesSummaryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiAwrHubAwrSourcesSummary resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiawrhubawrsourcessummary"

dataociopsiawrhubawrsourcessummary.DataOciOpsiAwrHubAwrSourcesSummary_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiawrhubawrsourcessummary"

dataociopsiawrhubawrsourcessummary.DataOciOpsiAwrHubAwrSourcesSummary_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiawrhubawrsourcessummary"

dataociopsiawrhubawrsourcessummary.DataOciOpsiAwrHubAwrSourcesSummary_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiawrhubawrsourcessummary"

dataociopsiawrhubawrsourcessummary.DataOciOpsiAwrHubAwrSourcesSummary_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOpsiAwrHubAwrSourcesSummary resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOpsiAwrHubAwrSourcesSummary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOpsiAwrHubAwrSourcesSummary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiAwrHubAwrSourcesSummary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList">DataOciOpsiAwrHubAwrSourcesSummaryItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.awrHubIdInput">AwrHubIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.awrHubId">AwrHubId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.items"></a>

```go
func Items() DataOciOpsiAwrHubAwrSourcesSummaryItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList">DataOciOpsiAwrHubAwrSourcesSummaryItemsList</a>

---

##### `AwrHubIdInput`<sup>Optional</sup> <a name="AwrHubIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.awrHubIdInput"></a>

```go
func AwrHubIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `AwrHubId`<sup>Required</sup> <a name="AwrHubId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.awrHubId"></a>

```go
func AwrHubId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiAwrHubAwrSourcesSummaryConfig <a name="DataOciOpsiAwrHubAwrSourcesSummaryConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiawrhubawrsourcessummary"

&dataociopsiawrhubawrsourcessummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AwrHubId: *string,
	CompartmentId: *string,
	Id: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.awrHubId">AwrHubId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#awr_hub_id DataOciOpsiAwrHubAwrSourcesSummary#awr_hub_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#compartment_id DataOciOpsiAwrHubAwrSourcesSummary#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#id DataOciOpsiAwrHubAwrSourcesSummary#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#name DataOciOpsiAwrHubAwrSourcesSummary#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AwrHubId`<sup>Required</sup> <a name="AwrHubId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.awrHubId"></a>

```go
AwrHubId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#awr_hub_id DataOciOpsiAwrHubAwrSourcesSummary#awr_hub_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#compartment_id DataOciOpsiAwrHubAwrSourcesSummary#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#id DataOciOpsiAwrHubAwrSourcesSummary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#name DataOciOpsiAwrHubAwrSourcesSummary#name}.

---

### DataOciOpsiAwrHubAwrSourcesSummaryItems <a name="DataOciOpsiAwrHubAwrSourcesSummaryItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiawrhubawrsourcessummary"

&dataociopsiawrhubawrsourcessummary.DataOciOpsiAwrHubAwrSourcesSummaryItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiAwrHubAwrSourcesSummaryItemsList <a name="DataOciOpsiAwrHubAwrSourcesSummaryItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiawrhubawrsourcessummary"

dataociopsiawrhubawrsourcessummary.NewDataOciOpsiAwrHubAwrSourcesSummaryItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiAwrHubAwrSourcesSummaryItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.get"></a>

```go
func Get(index *f64) DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference <a name="DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiawrhubawrsourcessummary"

dataociopsiawrhubawrsourcessummary.NewDataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.awrHubId">AwrHubId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.awrSourceDatabaseId">AwrSourceDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.hoursSinceLastImport">HoursSinceLastImport</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.maxSnapshotIdentifier">MaxSnapshotIdentifier</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.minSnapshotIdentifier">MinSnapshotIdentifier</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.snapshotsUploaded">SnapshotsUploaded</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.timeFirstSnapshotGenerated">TimeFirstSnapshotGenerated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.timeLastSnapshotGenerated">TimeLastSnapshotGenerated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItems">DataOciOpsiAwrHubAwrSourcesSummaryItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwrHubId`<sup>Required</sup> <a name="AwrHubId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.awrHubId"></a>

```go
func AwrHubId() *string
```

- *Type:* *string

---

##### `AwrSourceDatabaseId`<sup>Required</sup> <a name="AwrSourceDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.awrSourceDatabaseId"></a>

```go
func AwrSourceDatabaseId() *string
```

- *Type:* *string

---

##### `HoursSinceLastImport`<sup>Required</sup> <a name="HoursSinceLastImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.hoursSinceLastImport"></a>

```go
func HoursSinceLastImport() *f64
```

- *Type:* *f64

---

##### `MaxSnapshotIdentifier`<sup>Required</sup> <a name="MaxSnapshotIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.maxSnapshotIdentifier"></a>

```go
func MaxSnapshotIdentifier() *f64
```

- *Type:* *f64

---

##### `MinSnapshotIdentifier`<sup>Required</sup> <a name="MinSnapshotIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.minSnapshotIdentifier"></a>

```go
func MinSnapshotIdentifier() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SnapshotsUploaded`<sup>Required</sup> <a name="SnapshotsUploaded" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.snapshotsUploaded"></a>

```go
func SnapshotsUploaded() *f64
```

- *Type:* *f64

---

##### `TimeFirstSnapshotGenerated`<sup>Required</sup> <a name="TimeFirstSnapshotGenerated" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.timeFirstSnapshotGenerated"></a>

```go
func TimeFirstSnapshotGenerated() *string
```

- *Type:* *string

---

##### `TimeLastSnapshotGenerated`<sup>Required</sup> <a name="TimeLastSnapshotGenerated" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.timeLastSnapshotGenerated"></a>

```go
func TimeLastSnapshotGenerated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOpsiAwrHubAwrSourcesSummaryItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItems">DataOciOpsiAwrHubAwrSourcesSummaryItems</a>

---




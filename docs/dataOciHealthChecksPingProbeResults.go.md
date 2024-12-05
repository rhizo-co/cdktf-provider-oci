# `dataOciHealthChecksPingProbeResults` Submodule <a name="`dataOciHealthChecksPingProbeResults` Submodule" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciHealthChecksPingProbeResults <a name="DataOciHealthChecksPingProbeResults" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results oci_health_checks_ping_probe_results}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingproberesults"

dataocihealthcheckspingproberesults.NewDataOciHealthChecksPingProbeResults(scope Construct, id *string, config DataOciHealthChecksPingProbeResultsConfig) DataOciHealthChecksPingProbeResults
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig">DataOciHealthChecksPingProbeResultsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig">DataOciHealthChecksPingProbeResultsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetStartTimeGreaterThanOrEqualTo">ResetStartTimeGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetStartTimeLessThanOrEqualTo">ResetStartTimeLessThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetId"></a>

```go
func ResetId()
```

##### `ResetStartTimeGreaterThanOrEqualTo` <a name="ResetStartTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetStartTimeGreaterThanOrEqualTo"></a>

```go
func ResetStartTimeGreaterThanOrEqualTo()
```

##### `ResetStartTimeLessThanOrEqualTo` <a name="ResetStartTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetStartTimeLessThanOrEqualTo"></a>

```go
func ResetStartTimeLessThanOrEqualTo()
```

##### `ResetTarget` <a name="ResetTarget" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetTarget"></a>

```go
func ResetTarget()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciHealthChecksPingProbeResults resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingproberesults"

dataocihealthcheckspingproberesults.DataOciHealthChecksPingProbeResults_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingproberesults"

dataocihealthcheckspingproberesults.DataOciHealthChecksPingProbeResults_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingproberesults"

dataocihealthcheckspingproberesults.DataOciHealthChecksPingProbeResults_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingproberesults"

dataocihealthcheckspingproberesults.DataOciHealthChecksPingProbeResults_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciHealthChecksPingProbeResults resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciHealthChecksPingProbeResults to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciHealthChecksPingProbeResults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciHealthChecksPingProbeResults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList">DataOciHealthChecksPingProbeResultsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.pingProbeResults">PingProbeResults</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList">DataOciHealthChecksPingProbeResultsPingProbeResultsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.probeConfigurationIdInput">ProbeConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeGreaterThanOrEqualToInput">StartTimeGreaterThanOrEqualToInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeLessThanOrEqualToInput">StartTimeLessThanOrEqualToInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.probeConfigurationId">ProbeConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeGreaterThanOrEqualTo">StartTimeGreaterThanOrEqualTo</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeLessThanOrEqualTo">StartTimeLessThanOrEqualTo</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.target">Target</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.filter"></a>

```go
func Filter() DataOciHealthChecksPingProbeResultsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList">DataOciHealthChecksPingProbeResultsFilterList</a>

---

##### `PingProbeResults`<sup>Required</sup> <a name="PingProbeResults" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.pingProbeResults"></a>

```go
func PingProbeResults() DataOciHealthChecksPingProbeResultsPingProbeResultsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList">DataOciHealthChecksPingProbeResultsPingProbeResultsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProbeConfigurationIdInput`<sup>Optional</sup> <a name="ProbeConfigurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.probeConfigurationIdInput"></a>

```go
func ProbeConfigurationIdInput() *string
```

- *Type:* *string

---

##### `StartTimeGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="StartTimeGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeGreaterThanOrEqualToInput"></a>

```go
func StartTimeGreaterThanOrEqualToInput() *f64
```

- *Type:* *f64

---

##### `StartTimeLessThanOrEqualToInput`<sup>Optional</sup> <a name="StartTimeLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeLessThanOrEqualToInput"></a>

```go
func StartTimeLessThanOrEqualToInput() *f64
```

- *Type:* *f64

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProbeConfigurationId`<sup>Required</sup> <a name="ProbeConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.probeConfigurationId"></a>

```go
func ProbeConfigurationId() *string
```

- *Type:* *string

---

##### `StartTimeGreaterThanOrEqualTo`<sup>Required</sup> <a name="StartTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeGreaterThanOrEqualTo"></a>

```go
func StartTimeGreaterThanOrEqualTo() *f64
```

- *Type:* *f64

---

##### `StartTimeLessThanOrEqualTo`<sup>Required</sup> <a name="StartTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeLessThanOrEqualTo"></a>

```go
func StartTimeLessThanOrEqualTo() *f64
```

- *Type:* *f64

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciHealthChecksPingProbeResultsConfig <a name="DataOciHealthChecksPingProbeResultsConfig" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingproberesults"

&dataocihealthcheckspingproberesults.DataOciHealthChecksPingProbeResultsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProbeConfigurationId: *string,
	Filter: interface{},
	Id: *string,
	StartTimeGreaterThanOrEqualTo: *f64,
	StartTimeLessThanOrEqualTo: *f64,
	Target: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.probeConfigurationId">ProbeConfigurationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#probe_configuration_id DataOciHealthChecksPingProbeResults#probe_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#id DataOciHealthChecksPingProbeResults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.startTimeGreaterThanOrEqualTo">StartTimeGreaterThanOrEqualTo</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#start_time_greater_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.startTimeLessThanOrEqualTo">StartTimeLessThanOrEqualTo</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#start_time_less_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.target">Target</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#target DataOciHealthChecksPingProbeResults#target}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProbeConfigurationId`<sup>Required</sup> <a name="ProbeConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.probeConfigurationId"></a>

```go
ProbeConfigurationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#probe_configuration_id DataOciHealthChecksPingProbeResults#probe_configuration_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#filter DataOciHealthChecksPingProbeResults#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#id DataOciHealthChecksPingProbeResults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StartTimeGreaterThanOrEqualTo`<sup>Optional</sup> <a name="StartTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.startTimeGreaterThanOrEqualTo"></a>

```go
StartTimeGreaterThanOrEqualTo *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#start_time_greater_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_greater_than_or_equal_to}.

---

##### `StartTimeLessThanOrEqualTo`<sup>Optional</sup> <a name="StartTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.startTimeLessThanOrEqualTo"></a>

```go
StartTimeLessThanOrEqualTo *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#start_time_less_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_less_than_or_equal_to}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.target"></a>

```go
Target *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#target DataOciHealthChecksPingProbeResults#target}.

---

### DataOciHealthChecksPingProbeResultsFilter <a name="DataOciHealthChecksPingProbeResultsFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingproberesults"

&dataocihealthcheckspingproberesults.DataOciHealthChecksPingProbeResultsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#name DataOciHealthChecksPingProbeResults#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#values DataOciHealthChecksPingProbeResults#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#regex DataOciHealthChecksPingProbeResults#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#name DataOciHealthChecksPingProbeResults#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#values DataOciHealthChecksPingProbeResults#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#regex DataOciHealthChecksPingProbeResults#regex}.

---

### DataOciHealthChecksPingProbeResultsPingProbeResults <a name="DataOciHealthChecksPingProbeResultsPingProbeResults" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResults"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResults.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingproberesults"

&dataocihealthcheckspingproberesults.DataOciHealthChecksPingProbeResultsPingProbeResults {

}
```


### DataOciHealthChecksPingProbeResultsPingProbeResultsConnection <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsConnection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingproberesults"

&dataocihealthcheckspingproberesults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnection {

}
```


### DataOciHealthChecksPingProbeResultsPingProbeResultsDns <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsDns" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDns.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingproberesults"

&dataocihealthcheckspingproberesults.DataOciHealthChecksPingProbeResultsPingProbeResultsDns {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciHealthChecksPingProbeResultsFilterList <a name="DataOciHealthChecksPingProbeResultsFilterList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingproberesults"

dataocihealthcheckspingproberesults.NewDataOciHealthChecksPingProbeResultsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciHealthChecksPingProbeResultsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.get"></a>

```go
func Get(index *f64) DataOciHealthChecksPingProbeResultsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciHealthChecksPingProbeResultsFilterOutputReference <a name="DataOciHealthChecksPingProbeResultsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingproberesults"

dataocihealthcheckspingproberesults.NewDataOciHealthChecksPingProbeResultsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciHealthChecksPingProbeResultsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingproberesults"

dataocihealthcheckspingproberesults.NewDataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.get"></a>

```go
func Get(index *f64) DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingproberesults"

dataocihealthcheckspingproberesults.NewDataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnection">DataOciHealthChecksPingProbeResultsPingProbeResultsConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciHealthChecksPingProbeResultsPingProbeResultsConnection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnection">DataOciHealthChecksPingProbeResultsPingProbeResultsConnection</a>

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingproberesults"

dataocihealthcheckspingproberesults.NewDataOciHealthChecksPingProbeResultsPingProbeResultsDnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.get"></a>

```go
func Get(index *f64) DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingproberesults"

dataocihealthcheckspingproberesults.NewDataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.addresses">Addresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.domainLookupDuration">DomainLookupDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDns">DataOciHealthChecksPingProbeResultsPingProbeResultsDns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.addresses"></a>

```go
func Addresses() *[]*string
```

- *Type:* *[]*string

---

##### `DomainLookupDuration`<sup>Required</sup> <a name="DomainLookupDuration" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.domainLookupDuration"></a>

```go
func DomainLookupDuration() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciHealthChecksPingProbeResultsPingProbeResultsDns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDns">DataOciHealthChecksPingProbeResultsPingProbeResultsDns</a>

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsList <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingproberesults"

dataocihealthcheckspingproberesults.NewDataOciHealthChecksPingProbeResultsPingProbeResultsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciHealthChecksPingProbeResultsPingProbeResultsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.get"></a>

```go
func Get(index *f64) DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingproberesults"

dataocihealthcheckspingproberesults.NewDataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.connection">Connection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList">DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.dns">Dns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList">DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.domainLookupEnd">DomainLookupEnd</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.domainLookupStart">DomainLookupStart</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.errorCategory">ErrorCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.icmpCode">IcmpCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.isHealthy">IsHealthy</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.isTimedOut">IsTimedOut</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.latencyInMs">LatencyInMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.probeConfigurationId">ProbeConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.startTime">StartTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.vantagePointName">VantagePointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResults">DataOciHealthChecksPingProbeResultsPingProbeResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Connection`<sup>Required</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.connection"></a>

```go
func Connection() DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList">DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList</a>

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.dns"></a>

```go
func Dns() DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList">DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList</a>

---

##### `DomainLookupEnd`<sup>Required</sup> <a name="DomainLookupEnd" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.domainLookupEnd"></a>

```go
func DomainLookupEnd() *f64
```

- *Type:* *f64

---

##### `DomainLookupStart`<sup>Required</sup> <a name="DomainLookupStart" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.domainLookupStart"></a>

```go
func DomainLookupStart() *f64
```

- *Type:* *f64

---

##### `ErrorCategory`<sup>Required</sup> <a name="ErrorCategory" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.errorCategory"></a>

```go
func ErrorCategory() *string
```

- *Type:* *string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `IcmpCode`<sup>Required</sup> <a name="IcmpCode" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.icmpCode"></a>

```go
func IcmpCode() *f64
```

- *Type:* *f64

---

##### `IsHealthy`<sup>Required</sup> <a name="IsHealthy" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.isHealthy"></a>

```go
func IsHealthy() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsTimedOut`<sup>Required</sup> <a name="IsTimedOut" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.isTimedOut"></a>

```go
func IsTimedOut() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `LatencyInMs`<sup>Required</sup> <a name="LatencyInMs" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.latencyInMs"></a>

```go
func LatencyInMs() *f64
```

- *Type:* *f64

---

##### `ProbeConfigurationId`<sup>Required</sup> <a name="ProbeConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.probeConfigurationId"></a>

```go
func ProbeConfigurationId() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.startTime"></a>

```go
func StartTime() *f64
```

- *Type:* *f64

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `VantagePointName`<sup>Required</sup> <a name="VantagePointName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.vantagePointName"></a>

```go
func VantagePointName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciHealthChecksPingProbeResultsPingProbeResults
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResults">DataOciHealthChecksPingProbeResultsPingProbeResults</a>

---




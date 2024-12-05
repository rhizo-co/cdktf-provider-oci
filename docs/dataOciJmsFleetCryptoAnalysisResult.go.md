# `dataOciJmsFleetCryptoAnalysisResult` Submodule <a name="`dataOciJmsFleetCryptoAnalysisResult` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsFleetCryptoAnalysisResult <a name="DataOciJmsFleetCryptoAnalysisResult" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result oci_jms_fleet_crypto_analysis_result}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetcryptoanalysisresult"

dataocijmsfleetcryptoanalysisresult.NewDataOciJmsFleetCryptoAnalysisResult(scope Construct, id *string, config DataOciJmsFleetCryptoAnalysisResultConfig) DataOciJmsFleetCryptoAnalysisResult
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig">DataOciJmsFleetCryptoAnalysisResultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig">DataOciJmsFleetCryptoAnalysisResultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsFleetCryptoAnalysisResult resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetcryptoanalysisresult"

dataocijmsfleetcryptoanalysisresult.DataOciJmsFleetCryptoAnalysisResult_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetcryptoanalysisresult"

dataocijmsfleetcryptoanalysisresult.DataOciJmsFleetCryptoAnalysisResult_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetcryptoanalysisresult"

dataocijmsfleetcryptoanalysisresult.DataOciJmsFleetCryptoAnalysisResult_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetcryptoanalysisresult"

dataocijmsfleetcryptoanalysisresult.DataOciJmsFleetCryptoAnalysisResult_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciJmsFleetCryptoAnalysisResult resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciJmsFleetCryptoAnalysisResult to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciJmsFleetCryptoAnalysisResult that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsFleetCryptoAnalysisResult to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.aggregationMode">AggregationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.cryptoRoadmapVersion">CryptoRoadmapVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.findingCount">FindingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.nonCompliantFindingCount">NonCompliantFindingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.summarizedEventCount">SummarizedEventCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeFinished">TimeFinished</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeFirstEvent">TimeFirstEvent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeLastEvent">TimeLastEvent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.totalEventCount">TotalEventCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.workRequestId">WorkRequestId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.cryptoAnalysisResultIdInput">CryptoAnalysisResultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.fleetIdInput">FleetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.cryptoAnalysisResultId">CryptoAnalysisResultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.fleetId">FleetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AggregationMode`<sup>Required</sup> <a name="AggregationMode" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.aggregationMode"></a>

```go
func AggregationMode() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `CryptoRoadmapVersion`<sup>Required</sup> <a name="CryptoRoadmapVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.cryptoRoadmapVersion"></a>

```go
func CryptoRoadmapVersion() *string
```

- *Type:* *string

---

##### `FindingCount`<sup>Required</sup> <a name="FindingCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.findingCount"></a>

```go
func FindingCount() *f64
```

- *Type:* *f64

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.managedInstanceId"></a>

```go
func ManagedInstanceId() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `NonCompliantFindingCount`<sup>Required</sup> <a name="NonCompliantFindingCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.nonCompliantFindingCount"></a>

```go
func NonCompliantFindingCount() *f64
```

- *Type:* *f64

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `SummarizedEventCount`<sup>Required</sup> <a name="SummarizedEventCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.summarizedEventCount"></a>

```go
func SummarizedEventCount() *f64
```

- *Type:* *f64

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeFinished"></a>

```go
func TimeFinished() *string
```

- *Type:* *string

---

##### `TimeFirstEvent`<sup>Required</sup> <a name="TimeFirstEvent" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeFirstEvent"></a>

```go
func TimeFirstEvent() *string
```

- *Type:* *string

---

##### `TimeLastEvent`<sup>Required</sup> <a name="TimeLastEvent" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeLastEvent"></a>

```go
func TimeLastEvent() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `TotalEventCount`<sup>Required</sup> <a name="TotalEventCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.totalEventCount"></a>

```go
func TotalEventCount() *f64
```

- *Type:* *f64

---

##### `WorkRequestId`<sup>Required</sup> <a name="WorkRequestId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.workRequestId"></a>

```go
func WorkRequestId() *string
```

- *Type:* *string

---

##### `CryptoAnalysisResultIdInput`<sup>Optional</sup> <a name="CryptoAnalysisResultIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.cryptoAnalysisResultIdInput"></a>

```go
func CryptoAnalysisResultIdInput() *string
```

- *Type:* *string

---

##### `FleetIdInput`<sup>Optional</sup> <a name="FleetIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.fleetIdInput"></a>

```go
func FleetIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `CryptoAnalysisResultId`<sup>Required</sup> <a name="CryptoAnalysisResultId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.cryptoAnalysisResultId"></a>

```go
func CryptoAnalysisResultId() *string
```

- *Type:* *string

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.fleetId"></a>

```go
func FleetId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsFleetCryptoAnalysisResultConfig <a name="DataOciJmsFleetCryptoAnalysisResultConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetcryptoanalysisresult"

&dataocijmsfleetcryptoanalysisresult.DataOciJmsFleetCryptoAnalysisResultConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CryptoAnalysisResultId: *string,
	FleetId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.cryptoAnalysisResultId">CryptoAnalysisResultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result#crypto_analysis_result_id DataOciJmsFleetCryptoAnalysisResult#crypto_analysis_result_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.fleetId">FleetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result#fleet_id DataOciJmsFleetCryptoAnalysisResult#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result#id DataOciJmsFleetCryptoAnalysisResult#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CryptoAnalysisResultId`<sup>Required</sup> <a name="CryptoAnalysisResultId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.cryptoAnalysisResultId"></a>

```go
CryptoAnalysisResultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result#crypto_analysis_result_id DataOciJmsFleetCryptoAnalysisResult#crypto_analysis_result_id}.

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.fleetId"></a>

```go
FleetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result#fleet_id DataOciJmsFleetCryptoAnalysisResult#fleet_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result#id DataOciJmsFleetCryptoAnalysisResult#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---




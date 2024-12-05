# `dataOciCoreIpsecAlgorithm` Submodule <a name="`dataOciCoreIpsecAlgorithm` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreIpsecAlgorithm <a name="DataOciCoreIpsecAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_algorithm oci_core_ipsec_algorithm}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecalgorithm"

dataocicoreipsecalgorithm.NewDataOciCoreIpsecAlgorithm(scope Construct, id *string, config DataOciCoreIpsecAlgorithmConfig) DataOciCoreIpsecAlgorithm
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig">DataOciCoreIpsecAlgorithmConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig">DataOciCoreIpsecAlgorithmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreIpsecAlgorithm resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecalgorithm"

dataocicoreipsecalgorithm.DataOciCoreIpsecAlgorithm_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecalgorithm"

dataocicoreipsecalgorithm.DataOciCoreIpsecAlgorithm_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecalgorithm"

dataocicoreipsecalgorithm.DataOciCoreIpsecAlgorithm_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecalgorithm"

dataocicoreipsecalgorithm.DataOciCoreIpsecAlgorithm_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreIpsecAlgorithm resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreIpsecAlgorithm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreIpsecAlgorithm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_algorithm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreIpsecAlgorithm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.allowedPhaseOneParameters">AllowedPhaseOneParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList">DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.allowedPhaseTwoParameters">AllowedPhaseTwoParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList">DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.defaultPhaseOneParameters">DefaultPhaseOneParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList">DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.defaultPhaseTwoParameters">DefaultPhaseTwoParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList">DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AllowedPhaseOneParameters`<sup>Required</sup> <a name="AllowedPhaseOneParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.allowedPhaseOneParameters"></a>

```go
func AllowedPhaseOneParameters() DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList">DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList</a>

---

##### `AllowedPhaseTwoParameters`<sup>Required</sup> <a name="AllowedPhaseTwoParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.allowedPhaseTwoParameters"></a>

```go
func AllowedPhaseTwoParameters() DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList">DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList</a>

---

##### `DefaultPhaseOneParameters`<sup>Required</sup> <a name="DefaultPhaseOneParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.defaultPhaseOneParameters"></a>

```go
func DefaultPhaseOneParameters() DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList">DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList</a>

---

##### `DefaultPhaseTwoParameters`<sup>Required</sup> <a name="DefaultPhaseTwoParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.defaultPhaseTwoParameters"></a>

```go
func DefaultPhaseTwoParameters() DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList">DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters <a name="DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecalgorithm"

&dataocicoreipsecalgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters {

}
```


### DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters <a name="DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecalgorithm"

&dataocicoreipsecalgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters {

}
```


### DataOciCoreIpsecAlgorithmConfig <a name="DataOciCoreIpsecAlgorithmConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecalgorithm"

&dataocicoreipsecalgorithm.DataOciCoreIpsecAlgorithmConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_algorithm#id DataOciCoreIpsecAlgorithm#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_algorithm#id DataOciCoreIpsecAlgorithm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters <a name="DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecalgorithm"

&dataocicoreipsecalgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters {

}
```


### DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters <a name="DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecalgorithm"

&dataocicoreipsecalgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList <a name="DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecalgorithm"

dataocicoreipsecalgorithm.NewDataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.get"></a>

```go
func Get(index *f64) DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference <a name="DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecalgorithm"

dataocicoreipsecalgorithm.NewDataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.authenticationAlgorithms">AuthenticationAlgorithms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.dhGroups">DhGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.encryptionAlgorithms">EncryptionAlgorithms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters">DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationAlgorithms`<sup>Required</sup> <a name="AuthenticationAlgorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.authenticationAlgorithms"></a>

```go
func AuthenticationAlgorithms() *[]*string
```

- *Type:* *[]*string

---

##### `DhGroups`<sup>Required</sup> <a name="DhGroups" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.dhGroups"></a>

```go
func DhGroups() *[]*string
```

- *Type:* *[]*string

---

##### `EncryptionAlgorithms`<sup>Required</sup> <a name="EncryptionAlgorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.encryptionAlgorithms"></a>

```go
func EncryptionAlgorithms() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters">DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters</a>

---


### DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList <a name="DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecalgorithm"

dataocicoreipsecalgorithm.NewDataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.get"></a>

```go
func Get(index *f64) DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference <a name="DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecalgorithm"

dataocicoreipsecalgorithm.NewDataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.authenticationAlgorithms">AuthenticationAlgorithms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.encryptionAlgorithms">EncryptionAlgorithms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.pfsDhGroups">PfsDhGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters">DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationAlgorithms`<sup>Required</sup> <a name="AuthenticationAlgorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.authenticationAlgorithms"></a>

```go
func AuthenticationAlgorithms() *[]*string
```

- *Type:* *[]*string

---

##### `EncryptionAlgorithms`<sup>Required</sup> <a name="EncryptionAlgorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.encryptionAlgorithms"></a>

```go
func EncryptionAlgorithms() *[]*string
```

- *Type:* *[]*string

---

##### `PfsDhGroups`<sup>Required</sup> <a name="PfsDhGroups" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.pfsDhGroups"></a>

```go
func PfsDhGroups() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters">DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters</a>

---


### DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList <a name="DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecalgorithm"

dataocicoreipsecalgorithm.NewDataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.get"></a>

```go
func Get(index *f64) DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference <a name="DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecalgorithm"

dataocicoreipsecalgorithm.NewDataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.defaultAuthenticationAlgorithms">DefaultAuthenticationAlgorithms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.defaultDhGroups">DefaultDhGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.defaultEncryptionAlgorithms">DefaultEncryptionAlgorithms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters">DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultAuthenticationAlgorithms`<sup>Required</sup> <a name="DefaultAuthenticationAlgorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.defaultAuthenticationAlgorithms"></a>

```go
func DefaultAuthenticationAlgorithms() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultDhGroups`<sup>Required</sup> <a name="DefaultDhGroups" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.defaultDhGroups"></a>

```go
func DefaultDhGroups() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultEncryptionAlgorithms`<sup>Required</sup> <a name="DefaultEncryptionAlgorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.defaultEncryptionAlgorithms"></a>

```go
func DefaultEncryptionAlgorithms() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters">DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters</a>

---


### DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList <a name="DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecalgorithm"

dataocicoreipsecalgorithm.NewDataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.get"></a>

```go
func Get(index *f64) DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference <a name="DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecalgorithm"

dataocicoreipsecalgorithm.NewDataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.defaultAuthenticationAlgorithms">DefaultAuthenticationAlgorithms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.defaultEncryptionAlgorithms">DefaultEncryptionAlgorithms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.defaultPfsDhGroup">DefaultPfsDhGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters">DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultAuthenticationAlgorithms`<sup>Required</sup> <a name="DefaultAuthenticationAlgorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.defaultAuthenticationAlgorithms"></a>

```go
func DefaultAuthenticationAlgorithms() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultEncryptionAlgorithms`<sup>Required</sup> <a name="DefaultEncryptionAlgorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.defaultEncryptionAlgorithms"></a>

```go
func DefaultEncryptionAlgorithms() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultPfsDhGroup`<sup>Required</sup> <a name="DefaultPfsDhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.defaultPfsDhGroup"></a>

```go
func DefaultPfsDhGroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters">DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters</a>

---




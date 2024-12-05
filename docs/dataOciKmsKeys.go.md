# `dataOciKmsKeys` Submodule <a name="`dataOciKmsKeys` Submodule" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciKmsKeys <a name="DataOciKmsKeys" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_keys oci_kms_keys}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

dataocikmskeys.NewDataOciKmsKeys(scope Construct, id *string, config DataOciKmsKeysConfig) DataOciKmsKeys
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig">DataOciKmsKeysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig">DataOciKmsKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.resetCurveId">ResetCurveId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.resetLength">ResetLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.resetProtectionMode">ResetProtectionMode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.resetAlgorithm"></a>

```go
func ResetAlgorithm()
```

##### `ResetCurveId` <a name="ResetCurveId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.resetCurveId"></a>

```go
func ResetCurveId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.resetId"></a>

```go
func ResetId()
```

##### `ResetLength` <a name="ResetLength" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.resetLength"></a>

```go
func ResetLength()
```

##### `ResetProtectionMode` <a name="ResetProtectionMode" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.resetProtectionMode"></a>

```go
func ResetProtectionMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciKmsKeys resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

dataocikmskeys.DataOciKmsKeys_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

dataocikmskeys.DataOciKmsKeys_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

dataocikmskeys.DataOciKmsKeys_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

dataocikmskeys.DataOciKmsKeys_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciKmsKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciKmsKeys to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciKmsKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciKmsKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList">DataOciKmsKeysFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.keys">Keys</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysList">DataOciKmsKeysKeysList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.algorithmInput">AlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.curveIdInput">CurveIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.lengthInput">LengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.managementEndpointInput">ManagementEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.protectionModeInput">ProtectionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.curveId">CurveId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.length">Length</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.managementEndpoint">ManagementEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.protectionMode">ProtectionMode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.filter"></a>

```go
func Filter() DataOciKmsKeysFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList">DataOciKmsKeysFilterList</a>

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.keys"></a>

```go
func Keys() DataOciKmsKeysKeysList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysList">DataOciKmsKeysKeysList</a>

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.algorithmInput"></a>

```go
func AlgorithmInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CurveIdInput`<sup>Optional</sup> <a name="CurveIdInput" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.curveIdInput"></a>

```go
func CurveIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LengthInput`<sup>Optional</sup> <a name="LengthInput" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.lengthInput"></a>

```go
func LengthInput() *f64
```

- *Type:* *f64

---

##### `ManagementEndpointInput`<sup>Optional</sup> <a name="ManagementEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.managementEndpointInput"></a>

```go
func ManagementEndpointInput() *string
```

- *Type:* *string

---

##### `ProtectionModeInput`<sup>Optional</sup> <a name="ProtectionModeInput" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.protectionModeInput"></a>

```go
func ProtectionModeInput() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CurveId`<sup>Required</sup> <a name="CurveId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.curveId"></a>

```go
func CurveId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Length`<sup>Required</sup> <a name="Length" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.length"></a>

```go
func Length() *f64
```

- *Type:* *f64

---

##### `ManagementEndpoint`<sup>Required</sup> <a name="ManagementEndpoint" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.managementEndpoint"></a>

```go
func ManagementEndpoint() *string
```

- *Type:* *string

---

##### `ProtectionMode`<sup>Required</sup> <a name="ProtectionMode" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.protectionMode"></a>

```go
func ProtectionMode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeys.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciKmsKeysConfig <a name="DataOciKmsKeysConfig" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

&dataocikmskeys.DataOciKmsKeysConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	ManagementEndpoint: *string,
	Algorithm: *string,
	CurveId: *string,
	Filter: interface{},
	Id: *string,
	Length: *f64,
	ProtectionMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_keys#compartment_id DataOciKmsKeys#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.managementEndpoint">ManagementEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_keys#management_endpoint DataOciKmsKeys#management_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.algorithm">Algorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_keys#algorithm DataOciKmsKeys#algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.curveId">CurveId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_keys#curve_id DataOciKmsKeys#curve_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_keys#id DataOciKmsKeys#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.length">Length</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_keys#length DataOciKmsKeys#length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.protectionMode">ProtectionMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_keys#protection_mode DataOciKmsKeys#protection_mode}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_keys#compartment_id DataOciKmsKeys#compartment_id}.

---

##### `ManagementEndpoint`<sup>Required</sup> <a name="ManagementEndpoint" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.managementEndpoint"></a>

```go
ManagementEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_keys#management_endpoint DataOciKmsKeys#management_endpoint}.

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.algorithm"></a>

```go
Algorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_keys#algorithm DataOciKmsKeys#algorithm}.

---

##### `CurveId`<sup>Optional</sup> <a name="CurveId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.curveId"></a>

```go
CurveId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_keys#curve_id DataOciKmsKeys#curve_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_keys#filter DataOciKmsKeys#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_keys#id DataOciKmsKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Length`<sup>Optional</sup> <a name="Length" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.length"></a>

```go
Length *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_keys#length DataOciKmsKeys#length}.

---

##### `ProtectionMode`<sup>Optional</sup> <a name="ProtectionMode" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysConfig.property.protectionMode"></a>

```go
ProtectionMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_keys#protection_mode DataOciKmsKeys#protection_mode}.

---

### DataOciKmsKeysFilter <a name="DataOciKmsKeysFilter" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

&dataocikmskeys.DataOciKmsKeysFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_keys#name DataOciKmsKeys#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_keys#values DataOciKmsKeys#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_keys#regex DataOciKmsKeys#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_keys#name DataOciKmsKeys#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_keys#values DataOciKmsKeys#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_keys#regex DataOciKmsKeys#regex}.

---

### DataOciKmsKeysKeys <a name="DataOciKmsKeysKeys" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeys"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeys.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

&dataocikmskeys.DataOciKmsKeysKeys {

}
```


### DataOciKmsKeysKeysAutoKeyRotationDetails <a name="DataOciKmsKeysKeysAutoKeyRotationDetails" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

&dataocikmskeys.DataOciKmsKeysKeysAutoKeyRotationDetails {

}
```


### DataOciKmsKeysKeysExternalKeyReference <a name="DataOciKmsKeysKeysExternalKeyReference" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReference"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

&dataocikmskeys.DataOciKmsKeysKeysExternalKeyReference {

}
```


### DataOciKmsKeysKeysExternalKeyReferenceDetails <a name="DataOciKmsKeysKeysExternalKeyReferenceDetails" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

&dataocikmskeys.DataOciKmsKeysKeysExternalKeyReferenceDetails {

}
```


### DataOciKmsKeysKeysKeyShape <a name="DataOciKmsKeysKeysKeyShape" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShape"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShape.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

&dataocikmskeys.DataOciKmsKeysKeysKeyShape {

}
```


### DataOciKmsKeysKeysReplicaDetails <a name="DataOciKmsKeysKeysReplicaDetails" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

&dataocikmskeys.DataOciKmsKeysKeysReplicaDetails {

}
```


### DataOciKmsKeysKeysRestoreFromFile <a name="DataOciKmsKeysKeysRestoreFromFile" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFile"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFile.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

&dataocikmskeys.DataOciKmsKeysKeysRestoreFromFile {

}
```


### DataOciKmsKeysKeysRestoreFromObjectStore <a name="DataOciKmsKeysKeysRestoreFromObjectStore" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStore"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStore.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

&dataocikmskeys.DataOciKmsKeysKeysRestoreFromObjectStore {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciKmsKeysFilterList <a name="DataOciKmsKeysFilterList" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

dataocikmskeys.NewDataOciKmsKeysFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciKmsKeysFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList.get"></a>

```go
func Get(index *f64) DataOciKmsKeysFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciKmsKeysFilterOutputReference <a name="DataOciKmsKeysFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

dataocikmskeys.NewDataOciKmsKeysFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciKmsKeysFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciKmsKeysKeysAutoKeyRotationDetailsList <a name="DataOciKmsKeysKeysAutoKeyRotationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

dataocikmskeys.NewDataOciKmsKeysKeysAutoKeyRotationDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciKmsKeysKeysAutoKeyRotationDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsList.get"></a>

```go
func Get(index *f64) DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference <a name="DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

dataocikmskeys.NewDataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.property.lastRotationMessage">LastRotationMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.property.lastRotationStatus">LastRotationStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.property.rotationIntervalInDays">RotationIntervalInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.property.timeOfLastRotation">TimeOfLastRotation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.property.timeOfNextRotation">TimeOfNextRotation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.property.timeOfScheduleStart">TimeOfScheduleStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetails">DataOciKmsKeysKeysAutoKeyRotationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastRotationMessage`<sup>Required</sup> <a name="LastRotationMessage" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.property.lastRotationMessage"></a>

```go
func LastRotationMessage() *string
```

- *Type:* *string

---

##### `LastRotationStatus`<sup>Required</sup> <a name="LastRotationStatus" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.property.lastRotationStatus"></a>

```go
func LastRotationStatus() *string
```

- *Type:* *string

---

##### `RotationIntervalInDays`<sup>Required</sup> <a name="RotationIntervalInDays" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.property.rotationIntervalInDays"></a>

```go
func RotationIntervalInDays() *f64
```

- *Type:* *f64

---

##### `TimeOfLastRotation`<sup>Required</sup> <a name="TimeOfLastRotation" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.property.timeOfLastRotation"></a>

```go
func TimeOfLastRotation() *string
```

- *Type:* *string

---

##### `TimeOfNextRotation`<sup>Required</sup> <a name="TimeOfNextRotation" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.property.timeOfNextRotation"></a>

```go
func TimeOfNextRotation() *string
```

- *Type:* *string

---

##### `TimeOfScheduleStart`<sup>Required</sup> <a name="TimeOfScheduleStart" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.property.timeOfScheduleStart"></a>

```go
func TimeOfScheduleStart() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciKmsKeysKeysAutoKeyRotationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetails">DataOciKmsKeysKeysAutoKeyRotationDetails</a>

---


### DataOciKmsKeysKeysExternalKeyReferenceDetailsList <a name="DataOciKmsKeysKeysExternalKeyReferenceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

dataocikmskeys.NewDataOciKmsKeysKeysExternalKeyReferenceDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciKmsKeysKeysExternalKeyReferenceDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsList.get"></a>

```go
func Get(index *f64) DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference <a name="DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

dataocikmskeys.NewDataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.property.externalKeyId">ExternalKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.property.externalKeyVersionId">ExternalKeyVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetails">DataOciKmsKeysKeysExternalKeyReferenceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalKeyId`<sup>Required</sup> <a name="ExternalKeyId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.property.externalKeyId"></a>

```go
func ExternalKeyId() *string
```

- *Type:* *string

---

##### `ExternalKeyVersionId`<sup>Required</sup> <a name="ExternalKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.property.externalKeyVersionId"></a>

```go
func ExternalKeyVersionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciKmsKeysKeysExternalKeyReferenceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetails">DataOciKmsKeysKeysExternalKeyReferenceDetails</a>

---


### DataOciKmsKeysKeysExternalKeyReferenceList <a name="DataOciKmsKeysKeysExternalKeyReferenceList" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

dataocikmskeys.NewDataOciKmsKeysKeysExternalKeyReferenceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciKmsKeysKeysExternalKeyReferenceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceList.get"></a>

```go
func Get(index *f64) DataOciKmsKeysKeysExternalKeyReferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciKmsKeysKeysExternalKeyReferenceOutputReference <a name="DataOciKmsKeysKeysExternalKeyReferenceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

dataocikmskeys.NewDataOciKmsKeysKeysExternalKeyReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciKmsKeysKeysExternalKeyReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.property.externalKeyId">ExternalKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReference">DataOciKmsKeysKeysExternalKeyReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalKeyId`<sup>Required</sup> <a name="ExternalKeyId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.property.externalKeyId"></a>

```go
func ExternalKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciKmsKeysKeysExternalKeyReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReference">DataOciKmsKeysKeysExternalKeyReference</a>

---


### DataOciKmsKeysKeysKeyShapeList <a name="DataOciKmsKeysKeysKeyShapeList" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

dataocikmskeys.NewDataOciKmsKeysKeysKeyShapeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciKmsKeysKeysKeyShapeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeList.get"></a>

```go
func Get(index *f64) DataOciKmsKeysKeysKeyShapeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciKmsKeysKeysKeyShapeOutputReference <a name="DataOciKmsKeysKeysKeyShapeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

dataocikmskeys.NewDataOciKmsKeysKeysKeyShapeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciKmsKeysKeysKeyShapeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.property.curveId">CurveId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.property.length">Length</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShape">DataOciKmsKeysKeysKeyShape</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `CurveId`<sup>Required</sup> <a name="CurveId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.property.curveId"></a>

```go
func CurveId() *string
```

- *Type:* *string

---

##### `Length`<sup>Required</sup> <a name="Length" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.property.length"></a>

```go
func Length() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciKmsKeysKeysKeyShape
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShape">DataOciKmsKeysKeysKeyShape</a>

---


### DataOciKmsKeysKeysList <a name="DataOciKmsKeysKeysList" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

dataocikmskeys.NewDataOciKmsKeysKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciKmsKeysKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysList.get"></a>

```go
func Get(index *f64) DataOciKmsKeysKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciKmsKeysKeysOutputReference <a name="DataOciKmsKeysKeysOutputReference" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

dataocikmskeys.NewDataOciKmsKeysKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciKmsKeysKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.autoKeyRotationDetails">AutoKeyRotationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsList">DataOciKmsKeysKeysAutoKeyRotationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.currentKeyVersion">CurrentKeyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.desiredState">DesiredState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.externalKeyReference">ExternalKeyReference</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceList">DataOciKmsKeysKeysExternalKeyReferenceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.externalKeyReferenceDetails">ExternalKeyReferenceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsList">DataOciKmsKeysKeysExternalKeyReferenceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.isAutoRotationEnabled">IsAutoRotationEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.isPrimary">IsPrimary</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.keyShape">KeyShape</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeList">DataOciKmsKeysKeysKeyShapeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.managementEndpoint">ManagementEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.protectionMode">ProtectionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.replicaDetails">ReplicaDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsList">DataOciKmsKeysKeysReplicaDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.restoredFromKeyId">RestoredFromKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.restoreFromFile">RestoreFromFile</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileList">DataOciKmsKeysKeysRestoreFromFileList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.restoreFromObjectStore">RestoreFromObjectStore</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreList">DataOciKmsKeysKeysRestoreFromObjectStoreList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.restoreTrigger">RestoreTrigger</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.vaultId">VaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeys">DataOciKmsKeysKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoKeyRotationDetails`<sup>Required</sup> <a name="AutoKeyRotationDetails" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.autoKeyRotationDetails"></a>

```go
func AutoKeyRotationDetails() DataOciKmsKeysKeysAutoKeyRotationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysAutoKeyRotationDetailsList">DataOciKmsKeysKeysAutoKeyRotationDetailsList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CurrentKeyVersion`<sup>Required</sup> <a name="CurrentKeyVersion" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.currentKeyVersion"></a>

```go
func CurrentKeyVersion() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.desiredState"></a>

```go
func DesiredState() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExternalKeyReference`<sup>Required</sup> <a name="ExternalKeyReference" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.externalKeyReference"></a>

```go
func ExternalKeyReference() DataOciKmsKeysKeysExternalKeyReferenceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceList">DataOciKmsKeysKeysExternalKeyReferenceList</a>

---

##### `ExternalKeyReferenceDetails`<sup>Required</sup> <a name="ExternalKeyReferenceDetails" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.externalKeyReferenceDetails"></a>

```go
func ExternalKeyReferenceDetails() DataOciKmsKeysKeysExternalKeyReferenceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysExternalKeyReferenceDetailsList">DataOciKmsKeysKeysExternalKeyReferenceDetailsList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsAutoRotationEnabled`<sup>Required</sup> <a name="IsAutoRotationEnabled" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.isAutoRotationEnabled"></a>

```go
func IsAutoRotationEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.isPrimary"></a>

```go
func IsPrimary() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KeyShape`<sup>Required</sup> <a name="KeyShape" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.keyShape"></a>

```go
func KeyShape() DataOciKmsKeysKeysKeyShapeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysKeyShapeList">DataOciKmsKeysKeysKeyShapeList</a>

---

##### `ManagementEndpoint`<sup>Required</sup> <a name="ManagementEndpoint" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.managementEndpoint"></a>

```go
func ManagementEndpoint() *string
```

- *Type:* *string

---

##### `ProtectionMode`<sup>Required</sup> <a name="ProtectionMode" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.protectionMode"></a>

```go
func ProtectionMode() *string
```

- *Type:* *string

---

##### `ReplicaDetails`<sup>Required</sup> <a name="ReplicaDetails" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.replicaDetails"></a>

```go
func ReplicaDetails() DataOciKmsKeysKeysReplicaDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsList">DataOciKmsKeysKeysReplicaDetailsList</a>

---

##### `RestoredFromKeyId`<sup>Required</sup> <a name="RestoredFromKeyId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.restoredFromKeyId"></a>

```go
func RestoredFromKeyId() *string
```

- *Type:* *string

---

##### `RestoreFromFile`<sup>Required</sup> <a name="RestoreFromFile" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.restoreFromFile"></a>

```go
func RestoreFromFile() DataOciKmsKeysKeysRestoreFromFileList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileList">DataOciKmsKeysKeysRestoreFromFileList</a>

---

##### `RestoreFromObjectStore`<sup>Required</sup> <a name="RestoreFromObjectStore" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.restoreFromObjectStore"></a>

```go
func RestoreFromObjectStore() DataOciKmsKeysKeysRestoreFromObjectStoreList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreList">DataOciKmsKeysKeysRestoreFromObjectStoreList</a>

---

##### `RestoreTrigger`<sup>Required</sup> <a name="RestoreTrigger" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.restoreTrigger"></a>

```go
func RestoreTrigger() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeOfDeletion`<sup>Required</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.timeOfDeletion"></a>

```go
func TimeOfDeletion() *string
```

- *Type:* *string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.vaultId"></a>

```go
func VaultId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciKmsKeysKeys
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeys">DataOciKmsKeysKeys</a>

---


### DataOciKmsKeysKeysReplicaDetailsList <a name="DataOciKmsKeysKeysReplicaDetailsList" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

dataocikmskeys.NewDataOciKmsKeysKeysReplicaDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciKmsKeysKeysReplicaDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsList.get"></a>

```go
func Get(index *f64) DataOciKmsKeysKeysReplicaDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciKmsKeysKeysReplicaDetailsOutputReference <a name="DataOciKmsKeysKeysReplicaDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

dataocikmskeys.NewDataOciKmsKeysKeysReplicaDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciKmsKeysKeysReplicaDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.property.replicationId">ReplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetails">DataOciKmsKeysKeysReplicaDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReplicationId`<sup>Required</sup> <a name="ReplicationId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.property.replicationId"></a>

```go
func ReplicationId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciKmsKeysKeysReplicaDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysReplicaDetails">DataOciKmsKeysKeysReplicaDetails</a>

---


### DataOciKmsKeysKeysRestoreFromFileList <a name="DataOciKmsKeysKeysRestoreFromFileList" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

dataocikmskeys.NewDataOciKmsKeysKeysRestoreFromFileList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciKmsKeysKeysRestoreFromFileList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileList.get"></a>

```go
func Get(index *f64) DataOciKmsKeysKeysRestoreFromFileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciKmsKeysKeysRestoreFromFileOutputReference <a name="DataOciKmsKeysKeysRestoreFromFileOutputReference" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

dataocikmskeys.NewDataOciKmsKeysKeysRestoreFromFileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciKmsKeysKeysRestoreFromFileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.property.contentLength">ContentLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.property.contentMd5">ContentMd5</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.property.restoreKeyFromFileDetails">RestoreKeyFromFileDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFile">DataOciKmsKeysKeysRestoreFromFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentLength`<sup>Required</sup> <a name="ContentLength" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.property.contentLength"></a>

```go
func ContentLength() *string
```

- *Type:* *string

---

##### `ContentMd5`<sup>Required</sup> <a name="ContentMd5" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.property.contentMd5"></a>

```go
func ContentMd5() *string
```

- *Type:* *string

---

##### `RestoreKeyFromFileDetails`<sup>Required</sup> <a name="RestoreKeyFromFileDetails" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.property.restoreKeyFromFileDetails"></a>

```go
func RestoreKeyFromFileDetails() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFileOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciKmsKeysKeysRestoreFromFile
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromFile">DataOciKmsKeysKeysRestoreFromFile</a>

---


### DataOciKmsKeysKeysRestoreFromObjectStoreList <a name="DataOciKmsKeysKeysRestoreFromObjectStoreList" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

dataocikmskeys.NewDataOciKmsKeysKeysRestoreFromObjectStoreList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciKmsKeysKeysRestoreFromObjectStoreList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreList.get"></a>

```go
func Get(index *f64) DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference <a name="DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmskeys"

dataocikmskeys.NewDataOciKmsKeysKeysRestoreFromObjectStoreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStore">DataOciKmsKeysKeysRestoreFromObjectStore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStoreOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciKmsKeysKeysRestoreFromObjectStore
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeys.DataOciKmsKeysKeysRestoreFromObjectStore">DataOciKmsKeysKeysRestoreFromObjectStore</a>

---




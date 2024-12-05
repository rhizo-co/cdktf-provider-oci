# `dataOciWafProtectionCapabilityGroupTags` Submodule <a name="`dataOciWafProtectionCapabilityGroupTags` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWafProtectionCapabilityGroupTags <a name="DataOciWafProtectionCapabilityGroupTags" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags oci_waf_protection_capability_group_tags}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilitygrouptags"

dataociwafprotectioncapabilitygrouptags.NewDataOciWafProtectionCapabilityGroupTags(scope Construct, id *string, config DataOciWafProtectionCapabilityGroupTagsConfig) DataOciWafProtectionCapabilityGroupTags
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig">DataOciWafProtectionCapabilityGroupTagsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig">DataOciWafProtectionCapabilityGroupTagsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetName"></a>

```go
func ResetName()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciWafProtectionCapabilityGroupTags resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilitygrouptags"

dataociwafprotectioncapabilitygrouptags.DataOciWafProtectionCapabilityGroupTags_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilitygrouptags"

dataociwafprotectioncapabilitygrouptags.DataOciWafProtectionCapabilityGroupTags_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilitygrouptags"

dataociwafprotectioncapabilitygrouptags.DataOciWafProtectionCapabilityGroupTags_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilitygrouptags"

dataociwafprotectioncapabilitygrouptags.DataOciWafProtectionCapabilityGroupTags_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciWafProtectionCapabilityGroupTags resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciWafProtectionCapabilityGroupTags to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciWafProtectionCapabilityGroupTags that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWafProtectionCapabilityGroupTags to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList">DataOciWafProtectionCapabilityGroupTagsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.protectionCapabilityGroupTagCollection">ProtectionCapabilityGroupTagCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.filter"></a>

```go
func Filter() DataOciWafProtectionCapabilityGroupTagsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList">DataOciWafProtectionCapabilityGroupTagsFilterList</a>

---

##### `ProtectionCapabilityGroupTagCollection`<sup>Required</sup> <a name="ProtectionCapabilityGroupTagCollection" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.protectionCapabilityGroupTagCollection"></a>

```go
func ProtectionCapabilityGroupTagCollection() DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWafProtectionCapabilityGroupTagsConfig <a name="DataOciWafProtectionCapabilityGroupTagsConfig" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilitygrouptags"

&dataociwafprotectioncapabilitygrouptags.DataOciWafProtectionCapabilityGroupTagsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Filter: interface{},
	Id: *string,
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#compartment_id DataOciWafProtectionCapabilityGroupTags#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#id DataOciWafProtectionCapabilityGroupTags#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#name DataOciWafProtectionCapabilityGroupTags#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#type DataOciWafProtectionCapabilityGroupTags#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#compartment_id DataOciWafProtectionCapabilityGroupTags#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#filter DataOciWafProtectionCapabilityGroupTags#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#id DataOciWafProtectionCapabilityGroupTags#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#name DataOciWafProtectionCapabilityGroupTags#name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#type DataOciWafProtectionCapabilityGroupTags#type}.

---

### DataOciWafProtectionCapabilityGroupTagsFilter <a name="DataOciWafProtectionCapabilityGroupTagsFilter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilitygrouptags"

&dataociwafprotectioncapabilitygrouptags.DataOciWafProtectionCapabilityGroupTagsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#name DataOciWafProtectionCapabilityGroupTags#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#values DataOciWafProtectionCapabilityGroupTags#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#regex DataOciWafProtectionCapabilityGroupTags#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#name DataOciWafProtectionCapabilityGroupTags#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#values DataOciWafProtectionCapabilityGroupTags#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#regex DataOciWafProtectionCapabilityGroupTags#regex}.

---

### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilitygrouptags"

&dataociwafprotectioncapabilitygrouptags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection {

}
```


### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilitygrouptags"

&dataociwafprotectioncapabilitygrouptags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWafProtectionCapabilityGroupTagsFilterList <a name="DataOciWafProtectionCapabilityGroupTagsFilterList" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilitygrouptags"

dataociwafprotectioncapabilitygrouptags.NewDataOciWafProtectionCapabilityGroupTagsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWafProtectionCapabilityGroupTagsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.get"></a>

```go
func Get(index *f64) DataOciWafProtectionCapabilityGroupTagsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciWafProtectionCapabilityGroupTagsFilterOutputReference <a name="DataOciWafProtectionCapabilityGroupTagsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilitygrouptags"

dataociwafprotectioncapabilitygrouptags.NewDataOciWafProtectionCapabilityGroupTagsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWafProtectionCapabilityGroupTagsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilitygrouptags"

dataociwafprotectioncapabilitygrouptags.NewDataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilitygrouptags"

dataociwafprotectioncapabilitygrouptags.NewDataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems</a>

---


### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilitygrouptags"

dataociwafprotectioncapabilitygrouptags.NewDataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.get"></a>

```go
func Get(index *f64) DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilitygrouptags"

dataociwafprotectioncapabilitygrouptags.NewDataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.items"></a>

```go
func Items() DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection</a>

---




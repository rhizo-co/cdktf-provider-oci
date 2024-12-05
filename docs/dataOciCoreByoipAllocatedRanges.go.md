# `dataOciCoreByoipAllocatedRanges` Submodule <a name="`dataOciCoreByoipAllocatedRanges` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreByoipAllocatedRanges <a name="DataOciCoreByoipAllocatedRanges" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges oci_core_byoip_allocated_ranges}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorebyoipallocatedranges"

dataocicorebyoipallocatedranges.NewDataOciCoreByoipAllocatedRanges(scope Construct, id *string, config DataOciCoreByoipAllocatedRangesConfig) DataOciCoreByoipAllocatedRanges
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig">DataOciCoreByoipAllocatedRangesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig">DataOciCoreByoipAllocatedRangesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreByoipAllocatedRanges resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorebyoipallocatedranges"

dataocicorebyoipallocatedranges.DataOciCoreByoipAllocatedRanges_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorebyoipallocatedranges"

dataocicorebyoipallocatedranges.DataOciCoreByoipAllocatedRanges_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorebyoipallocatedranges"

dataocicorebyoipallocatedranges.DataOciCoreByoipAllocatedRanges_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorebyoipallocatedranges"

dataocicorebyoipallocatedranges.DataOciCoreByoipAllocatedRanges_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreByoipAllocatedRanges resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreByoipAllocatedRanges to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreByoipAllocatedRanges that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreByoipAllocatedRanges to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.byoipAllocatedRangeCollection">ByoipAllocatedRangeCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList">DataOciCoreByoipAllocatedRangesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.byoipRangeIdInput">ByoipRangeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.byoipRangeId">ByoipRangeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ByoipAllocatedRangeCollection`<sup>Required</sup> <a name="ByoipAllocatedRangeCollection" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.byoipAllocatedRangeCollection"></a>

```go
func ByoipAllocatedRangeCollection() DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.filter"></a>

```go
func Filter() DataOciCoreByoipAllocatedRangesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList">DataOciCoreByoipAllocatedRangesFilterList</a>

---

##### `ByoipRangeIdInput`<sup>Optional</sup> <a name="ByoipRangeIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.byoipRangeIdInput"></a>

```go
func ByoipRangeIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ByoipRangeId`<sup>Required</sup> <a name="ByoipRangeId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.byoipRangeId"></a>

```go
func ByoipRangeId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection <a name="DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorebyoipallocatedranges"

&dataocicorebyoipallocatedranges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection {

}
```


### DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems <a name="DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorebyoipallocatedranges"

&dataocicorebyoipallocatedranges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems {

}
```


### DataOciCoreByoipAllocatedRangesConfig <a name="DataOciCoreByoipAllocatedRangesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorebyoipallocatedranges"

&dataocicorebyoipallocatedranges.DataOciCoreByoipAllocatedRangesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ByoipRangeId: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.byoipRangeId">ByoipRangeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#byoip_range_id DataOciCoreByoipAllocatedRanges#byoip_range_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#id DataOciCoreByoipAllocatedRanges#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ByoipRangeId`<sup>Required</sup> <a name="ByoipRangeId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.byoipRangeId"></a>

```go
ByoipRangeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#byoip_range_id DataOciCoreByoipAllocatedRanges#byoip_range_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#filter DataOciCoreByoipAllocatedRanges#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#id DataOciCoreByoipAllocatedRanges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreByoipAllocatedRangesFilter <a name="DataOciCoreByoipAllocatedRangesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorebyoipallocatedranges"

&dataocicorebyoipallocatedranges.DataOciCoreByoipAllocatedRangesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#name DataOciCoreByoipAllocatedRanges#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#values DataOciCoreByoipAllocatedRanges#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#regex DataOciCoreByoipAllocatedRanges#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#name DataOciCoreByoipAllocatedRanges#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#values DataOciCoreByoipAllocatedRanges#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#regex DataOciCoreByoipAllocatedRanges#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList <a name="DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorebyoipallocatedranges"

dataocicorebyoipallocatedranges.NewDataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference <a name="DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorebyoipallocatedranges"

dataocicorebyoipallocatedranges.NewDataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.publicIpPoolId">PublicIpPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.cidrBlock"></a>

```go
func CidrBlock() *string
```

- *Type:* *string

---

##### `PublicIpPoolId`<sup>Required</sup> <a name="PublicIpPoolId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.publicIpPoolId"></a>

```go
func PublicIpPoolId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems</a>

---


### DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList <a name="DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorebyoipallocatedranges"

dataocicorebyoipallocatedranges.NewDataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.get"></a>

```go
func Get(index *f64) DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference <a name="DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorebyoipallocatedranges"

dataocicorebyoipallocatedranges.NewDataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.items"></a>

```go
func Items() DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection</a>

---


### DataOciCoreByoipAllocatedRangesFilterList <a name="DataOciCoreByoipAllocatedRangesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorebyoipallocatedranges"

dataocicorebyoipallocatedranges.NewDataOciCoreByoipAllocatedRangesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreByoipAllocatedRangesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.get"></a>

```go
func Get(index *f64) DataOciCoreByoipAllocatedRangesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreByoipAllocatedRangesFilterOutputReference <a name="DataOciCoreByoipAllocatedRangesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorebyoipallocatedranges"

dataocicorebyoipallocatedranges.NewDataOciCoreByoipAllocatedRangesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreByoipAllocatedRangesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




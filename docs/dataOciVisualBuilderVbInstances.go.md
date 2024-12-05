# `dataOciVisualBuilderVbInstances` Submodule <a name="`dataOciVisualBuilderVbInstances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciVisualBuilderVbInstances <a name="DataOciVisualBuilderVbInstances" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances oci_visual_builder_vb_instances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstances"

dataocivisualbuildervbinstances.NewDataOciVisualBuilderVbInstances(scope Construct, id *string, config DataOciVisualBuilderVbInstancesConfig) DataOciVisualBuilderVbInstances
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig">DataOciVisualBuilderVbInstancesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig">DataOciVisualBuilderVbInstancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciVisualBuilderVbInstances resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstances"

dataocivisualbuildervbinstances.DataOciVisualBuilderVbInstances_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstances"

dataocivisualbuildervbinstances.DataOciVisualBuilderVbInstances_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstances"

dataocivisualbuildervbinstances.DataOciVisualBuilderVbInstances_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstances"

dataocivisualbuildervbinstances.DataOciVisualBuilderVbInstances_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciVisualBuilderVbInstances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciVisualBuilderVbInstances to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciVisualBuilderVbInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciVisualBuilderVbInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList">DataOciVisualBuilderVbInstancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.vbInstanceSummaryCollection">VbInstanceSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.filter"></a>

```go
func Filter() DataOciVisualBuilderVbInstancesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList">DataOciVisualBuilderVbInstancesFilterList</a>

---

##### `VbInstanceSummaryCollection`<sup>Required</sup> <a name="VbInstanceSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.vbInstanceSummaryCollection"></a>

```go
func VbInstanceSummaryCollection() DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciVisualBuilderVbInstancesConfig <a name="DataOciVisualBuilderVbInstancesConfig" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstances"

&dataocivisualbuildervbinstances.DataOciVisualBuilderVbInstancesConfig {
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#compartment_id DataOciVisualBuilderVbInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#display_name DataOciVisualBuilderVbInstances#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#id DataOciVisualBuilderVbInstances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#state DataOciVisualBuilderVbInstances#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#compartment_id DataOciVisualBuilderVbInstances#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#display_name DataOciVisualBuilderVbInstances#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#filter DataOciVisualBuilderVbInstances#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#id DataOciVisualBuilderVbInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#state DataOciVisualBuilderVbInstances#state}.

---

### DataOciVisualBuilderVbInstancesFilter <a name="DataOciVisualBuilderVbInstancesFilter" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstances"

&dataocivisualbuildervbinstances.DataOciVisualBuilderVbInstancesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#name DataOciVisualBuilderVbInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#values DataOciVisualBuilderVbInstances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#regex DataOciVisualBuilderVbInstances#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#name DataOciVisualBuilderVbInstances#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#values DataOciVisualBuilderVbInstances#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#regex DataOciVisualBuilderVbInstances#regex}.

---

### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstances"

&dataocivisualbuildervbinstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection {

}
```


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstances"

&dataocivisualbuildervbinstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems {

}
```


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstances"

&dataocivisualbuildervbinstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints {

}
```


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstances"

&dataocivisualbuildervbinstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments {

}
```


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstances"

&dataocivisualbuildervbinstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint {

}
```


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstances"

&dataocivisualbuildervbinstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciVisualBuilderVbInstancesFilterList <a name="DataOciVisualBuilderVbInstancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstances"

dataocivisualbuildervbinstances.NewDataOciVisualBuilderVbInstancesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciVisualBuilderVbInstancesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.get"></a>

```go
func Get(index *f64) DataOciVisualBuilderVbInstancesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciVisualBuilderVbInstancesFilterOutputReference <a name="DataOciVisualBuilderVbInstancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstances"

dataocivisualbuildervbinstances.NewDataOciVisualBuilderVbInstancesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciVisualBuilderVbInstancesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstances"

dataocivisualbuildervbinstances.NewDataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.get"></a>

```go
func Get(index *f64) DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstances"

dataocivisualbuildervbinstances.NewDataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.certificateSecretId">CertificateSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.certificateSecretVersion">CertificateSecretVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateSecretId`<sup>Required</sup> <a name="CertificateSecretId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.certificateSecretId"></a>

```go
func CertificateSecretId() *string
```

- *Type:* *string

---

##### `CertificateSecretVersion`<sup>Required</sup> <a name="CertificateSecretVersion" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.certificateSecretVersion"></a>

```go
func CertificateSecretVersion() *f64
```

- *Type:* *f64

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints</a>

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstances"

dataocivisualbuildervbinstances.NewDataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.get"></a>

```go
func Get(index *f64) DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstances"

dataocivisualbuildervbinstances.NewDataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.isImplicit">IsImplicit</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.targetInstanceUrl">TargetInstanceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.targetRole">TargetRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.targetServiceType">TargetServiceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsImplicit`<sup>Required</sup> <a name="IsImplicit" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.isImplicit"></a>

```go
func IsImplicit() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `TargetInstanceUrl`<sup>Required</sup> <a name="TargetInstanceUrl" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.targetInstanceUrl"></a>

```go
func TargetInstanceUrl() *string
```

- *Type:* *string

---

##### `TargetRole`<sup>Required</sup> <a name="TargetRole" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.targetRole"></a>

```go
func TargetRole() *string
```

- *Type:* *string

---

##### `TargetServiceType`<sup>Required</sup> <a name="TargetServiceType" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.targetServiceType"></a>

```go
func TargetServiceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments</a>

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstances"

dataocivisualbuildervbinstances.NewDataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.get"></a>

```go
func Get(index *f64) DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstances"

dataocivisualbuildervbinstances.NewDataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.certificateSecretId">CertificateSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.certificateSecretVersion">CertificateSecretVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateSecretId`<sup>Required</sup> <a name="CertificateSecretId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.certificateSecretId"></a>

```go
func CertificateSecretId() *string
```

- *Type:* *string

---

##### `CertificateSecretVersion`<sup>Required</sup> <a name="CertificateSecretVersion" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.certificateSecretVersion"></a>

```go
func CertificateSecretVersion() *f64
```

- *Type:* *f64

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint</a>

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstances"

dataocivisualbuildervbinstances.NewDataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.get"></a>

```go
func Get(index *f64) DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstances"

dataocivisualbuildervbinstances.NewDataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.idcsAppDisplayName">IdcsAppDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.idcsAppId">IdcsAppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.idcsAppLocationUrl">IdcsAppLocationUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.idcsAppName">IdcsAppName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.instancePrimaryAudienceUrl">InstancePrimaryAudienceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdcsAppDisplayName`<sup>Required</sup> <a name="IdcsAppDisplayName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.idcsAppDisplayName"></a>

```go
func IdcsAppDisplayName() *string
```

- *Type:* *string

---

##### `IdcsAppId`<sup>Required</sup> <a name="IdcsAppId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.idcsAppId"></a>

```go
func IdcsAppId() *string
```

- *Type:* *string

---

##### `IdcsAppLocationUrl`<sup>Required</sup> <a name="IdcsAppLocationUrl" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.idcsAppLocationUrl"></a>

```go
func IdcsAppLocationUrl() *string
```

- *Type:* *string

---

##### `IdcsAppName`<sup>Required</sup> <a name="IdcsAppName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.idcsAppName"></a>

```go
func IdcsAppName() *string
```

- *Type:* *string

---

##### `InstancePrimaryAudienceUrl`<sup>Required</sup> <a name="InstancePrimaryAudienceUrl" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.instancePrimaryAudienceUrl"></a>

```go
func InstancePrimaryAudienceUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo</a>

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstances"

dataocivisualbuildervbinstances.NewDataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstances"

dataocivisualbuildervbinstances.NewDataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.alternateCustomEndpoints">AlternateCustomEndpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.attachments">Attachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.consumptionModel">ConsumptionModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.customEndpoint">CustomEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.idcsInfo">IdcsInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.idcsOpenId">IdcsOpenId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.instanceUrl">InstanceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.isVisualBuilderEnabled">IsVisualBuilderEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.managementNatGatewayIp">ManagementNatGatewayIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.managementVcnId">ManagementVcnId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.serviceNatGatewayIp">ServiceNatGatewayIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.serviceVcnId">ServiceVcnId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlternateCustomEndpoints`<sup>Required</sup> <a name="AlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.alternateCustomEndpoints"></a>

```go
func AlternateCustomEndpoints() DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList</a>

---

##### `Attachments`<sup>Required</sup> <a name="Attachments" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.attachments"></a>

```go
func Attachments() DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConsumptionModel`<sup>Required</sup> <a name="ConsumptionModel" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.consumptionModel"></a>

```go
func ConsumptionModel() *string
```

- *Type:* *string

---

##### `CustomEndpoint`<sup>Required</sup> <a name="CustomEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.customEndpoint"></a>

```go
func CustomEndpoint() DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsInfo`<sup>Required</sup> <a name="IdcsInfo" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.idcsInfo"></a>

```go
func IdcsInfo() DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList</a>

---

##### `IdcsOpenId`<sup>Required</sup> <a name="IdcsOpenId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.idcsOpenId"></a>

```go
func IdcsOpenId() *string
```

- *Type:* *string

---

##### `InstanceUrl`<sup>Required</sup> <a name="InstanceUrl" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.instanceUrl"></a>

```go
func InstanceUrl() *string
```

- *Type:* *string

---

##### `IsVisualBuilderEnabled`<sup>Required</sup> <a name="IsVisualBuilderEnabled" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.isVisualBuilderEnabled"></a>

```go
func IsVisualBuilderEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ManagementNatGatewayIp`<sup>Required</sup> <a name="ManagementNatGatewayIp" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.managementNatGatewayIp"></a>

```go
func ManagementNatGatewayIp() *string
```

- *Type:* *string

---

##### `ManagementVcnId`<sup>Required</sup> <a name="ManagementVcnId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.managementVcnId"></a>

```go
func ManagementVcnId() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `ServiceNatGatewayIp`<sup>Required</sup> <a name="ServiceNatGatewayIp" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.serviceNatGatewayIp"></a>

```go
func ServiceNatGatewayIp() *string
```

- *Type:* *string

---

##### `ServiceVcnId`<sup>Required</sup> <a name="ServiceVcnId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.serviceVcnId"></a>

```go
func ServiceVcnId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems</a>

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstances"

dataocivisualbuildervbinstances.NewDataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.get"></a>

```go
func Get(index *f64) DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstances"

dataocivisualbuildervbinstances.NewDataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.property.items"></a>

```go
func Items() DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection</a>

---




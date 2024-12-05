# `dataOciBdsBdsInstanceGetOsPatch` Submodule <a name="`dataOciBdsBdsInstanceGetOsPatch` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBdsBdsInstanceGetOsPatch <a name="DataOciBdsBdsInstanceGetOsPatch" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch oci_bds_bds_instance_get_os_patch}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstancegetospatch"

dataocibdsbdsinstancegetospatch.NewDataOciBdsBdsInstanceGetOsPatch(scope Construct, id *string, config DataOciBdsBdsInstanceGetOsPatchConfig) DataOciBdsBdsInstanceGetOsPatch
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig">DataOciBdsBdsInstanceGetOsPatchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig">DataOciBdsBdsInstanceGetOsPatchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBdsBdsInstanceGetOsPatch resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstancegetospatch"

dataocibdsbdsinstancegetospatch.DataOciBdsBdsInstanceGetOsPatch_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstancegetospatch"

dataocibdsbdsinstancegetospatch.DataOciBdsBdsInstanceGetOsPatch_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstancegetospatch"

dataocibdsbdsinstancegetospatch.DataOciBdsBdsInstanceGetOsPatch_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstancegetospatch"

dataocibdsbdsinstancegetospatch.DataOciBdsBdsInstanceGetOsPatch_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciBdsBdsInstanceGetOsPatch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciBdsBdsInstanceGetOsPatch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciBdsBdsInstanceGetOsPatch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBdsBdsInstanceGetOsPatch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList">DataOciBdsBdsInstanceGetOsPatchFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.minBdsVersion">MinBdsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.minCompatibleOdhVersionMap">MinCompatibleOdhVersionMap</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.patchType">PatchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.releaseDate">ReleaseDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.targetPackages">TargetPackages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList">DataOciBdsBdsInstanceGetOsPatchTargetPackagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.bdsInstanceIdInput">BdsInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.osPatchVersionInput">OsPatchVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.bdsInstanceId">BdsInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.osPatchVersion">OsPatchVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.filter"></a>

```go
func Filter() DataOciBdsBdsInstanceGetOsPatchFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList">DataOciBdsBdsInstanceGetOsPatchFilterList</a>

---

##### `MinBdsVersion`<sup>Required</sup> <a name="MinBdsVersion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.minBdsVersion"></a>

```go
func MinBdsVersion() *string
```

- *Type:* *string

---

##### `MinCompatibleOdhVersionMap`<sup>Required</sup> <a name="MinCompatibleOdhVersionMap" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.minCompatibleOdhVersionMap"></a>

```go
func MinCompatibleOdhVersionMap() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `PatchType`<sup>Required</sup> <a name="PatchType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.patchType"></a>

```go
func PatchType() *string
```

- *Type:* *string

---

##### `ReleaseDate`<sup>Required</sup> <a name="ReleaseDate" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.releaseDate"></a>

```go
func ReleaseDate() *string
```

- *Type:* *string

---

##### `TargetPackages`<sup>Required</sup> <a name="TargetPackages" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.targetPackages"></a>

```go
func TargetPackages() DataOciBdsBdsInstanceGetOsPatchTargetPackagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList">DataOciBdsBdsInstanceGetOsPatchTargetPackagesList</a>

---

##### `BdsInstanceIdInput`<sup>Optional</sup> <a name="BdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.bdsInstanceIdInput"></a>

```go
func BdsInstanceIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OsPatchVersionInput`<sup>Optional</sup> <a name="OsPatchVersionInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.osPatchVersionInput"></a>

```go
func OsPatchVersionInput() *string
```

- *Type:* *string

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.bdsInstanceId"></a>

```go
func BdsInstanceId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OsPatchVersion`<sup>Required</sup> <a name="OsPatchVersion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.osPatchVersion"></a>

```go
func OsPatchVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBdsBdsInstanceGetOsPatchConfig <a name="DataOciBdsBdsInstanceGetOsPatchConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstancegetospatch"

&dataocibdsbdsinstancegetospatch.DataOciBdsBdsInstanceGetOsPatchConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BdsInstanceId: *string,
	OsPatchVersion: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.bdsInstanceId">BdsInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#bds_instance_id DataOciBdsBdsInstanceGetOsPatch#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.osPatchVersion">OsPatchVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#os_patch_version DataOciBdsBdsInstanceGetOsPatch#os_patch_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#id DataOciBdsBdsInstanceGetOsPatch#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.bdsInstanceId"></a>

```go
BdsInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#bds_instance_id DataOciBdsBdsInstanceGetOsPatch#bds_instance_id}.

---

##### `OsPatchVersion`<sup>Required</sup> <a name="OsPatchVersion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.osPatchVersion"></a>

```go
OsPatchVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#os_patch_version DataOciBdsBdsInstanceGetOsPatch#os_patch_version}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#filter DataOciBdsBdsInstanceGetOsPatch#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#id DataOciBdsBdsInstanceGetOsPatch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciBdsBdsInstanceGetOsPatchFilter <a name="DataOciBdsBdsInstanceGetOsPatchFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstancegetospatch"

&dataocibdsbdsinstancegetospatch.DataOciBdsBdsInstanceGetOsPatchFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#name DataOciBdsBdsInstanceGetOsPatch#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#values DataOciBdsBdsInstanceGetOsPatch#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#regex DataOciBdsBdsInstanceGetOsPatch#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#name DataOciBdsBdsInstanceGetOsPatch#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#values DataOciBdsBdsInstanceGetOsPatch#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#regex DataOciBdsBdsInstanceGetOsPatch#regex}.

---

### DataOciBdsBdsInstanceGetOsPatchTargetPackages <a name="DataOciBdsBdsInstanceGetOsPatchTargetPackages" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackages.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstancegetospatch"

&dataocibdsbdsinstancegetospatch.DataOciBdsBdsInstanceGetOsPatchTargetPackages {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciBdsBdsInstanceGetOsPatchFilterList <a name="DataOciBdsBdsInstanceGetOsPatchFilterList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstancegetospatch"

dataocibdsbdsinstancegetospatch.NewDataOciBdsBdsInstanceGetOsPatchFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsBdsInstanceGetOsPatchFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.get"></a>

```go
func Get(index *f64) DataOciBdsBdsInstanceGetOsPatchFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciBdsBdsInstanceGetOsPatchFilterOutputReference <a name="DataOciBdsBdsInstanceGetOsPatchFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstancegetospatch"

dataocibdsbdsinstancegetospatch.NewDataOciBdsBdsInstanceGetOsPatchFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsBdsInstanceGetOsPatchFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciBdsBdsInstanceGetOsPatchTargetPackagesList <a name="DataOciBdsBdsInstanceGetOsPatchTargetPackagesList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstancegetospatch"

dataocibdsbdsinstancegetospatch.NewDataOciBdsBdsInstanceGetOsPatchTargetPackagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsBdsInstanceGetOsPatchTargetPackagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.get"></a>

```go
func Get(index *f64) DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference <a name="DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstancegetospatch"

dataocibdsbdsinstancegetospatch.NewDataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.packageName">PackageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.relatedCvEs">RelatedCvEs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.targetVersion">TargetVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.updateType">UpdateType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackages">DataOciBdsBdsInstanceGetOsPatchTargetPackages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PackageName`<sup>Required</sup> <a name="PackageName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.packageName"></a>

```go
func PackageName() *string
```

- *Type:* *string

---

##### `RelatedCvEs`<sup>Required</sup> <a name="RelatedCvEs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.relatedCvEs"></a>

```go
func RelatedCvEs() *[]*string
```

- *Type:* *[]*string

---

##### `TargetVersion`<sup>Required</sup> <a name="TargetVersion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.targetVersion"></a>

```go
func TargetVersion() *string
```

- *Type:* *string

---

##### `UpdateType`<sup>Required</sup> <a name="UpdateType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.updateType"></a>

```go
func UpdateType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsBdsInstanceGetOsPatchTargetPackages
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackages">DataOciBdsBdsInstanceGetOsPatchTargetPackages</a>

---




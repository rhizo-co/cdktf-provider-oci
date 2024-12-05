# `dataOciSecurityAttributeSecurityAttributes` Submodule <a name="`dataOciSecurityAttributeSecurityAttributes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciSecurityAttributeSecurityAttributes <a name="DataOciSecurityAttributeSecurityAttributes" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes oci_security_attribute_security_attributes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributes"

dataocisecurityattributesecurityattributes.NewDataOciSecurityAttributeSecurityAttributes(scope Construct, id *string, config DataOciSecurityAttributeSecurityAttributesConfig) DataOciSecurityAttributeSecurityAttributes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig">DataOciSecurityAttributeSecurityAttributesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig">DataOciSecurityAttributeSecurityAttributesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciSecurityAttributeSecurityAttributes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributes"

dataocisecurityattributesecurityattributes.DataOciSecurityAttributeSecurityAttributes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributes"

dataocisecurityattributesecurityattributes.DataOciSecurityAttributeSecurityAttributes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributes"

dataocisecurityattributesecurityattributes.DataOciSecurityAttributeSecurityAttributes_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributes"

dataocisecurityattributesecurityattributes.DataOciSecurityAttributeSecurityAttributes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciSecurityAttributeSecurityAttributes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciSecurityAttributeSecurityAttributes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciSecurityAttributeSecurityAttributes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciSecurityAttributeSecurityAttributes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList">DataOciSecurityAttributeSecurityAttributesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.securityAttributes">SecurityAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList">DataOciSecurityAttributeSecurityAttributesSecurityAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.securityAttributeNamespaceIdInput">SecurityAttributeNamespaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.securityAttributeNamespaceId">SecurityAttributeNamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.filter"></a>

```go
func Filter() DataOciSecurityAttributeSecurityAttributesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList">DataOciSecurityAttributeSecurityAttributesFilterList</a>

---

##### `SecurityAttributes`<sup>Required</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.securityAttributes"></a>

```go
func SecurityAttributes() DataOciSecurityAttributeSecurityAttributesSecurityAttributesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList">DataOciSecurityAttributeSecurityAttributesSecurityAttributesList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SecurityAttributeNamespaceIdInput`<sup>Optional</sup> <a name="SecurityAttributeNamespaceIdInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.securityAttributeNamespaceIdInput"></a>

```go
func SecurityAttributeNamespaceIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SecurityAttributeNamespaceId`<sup>Required</sup> <a name="SecurityAttributeNamespaceId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.securityAttributeNamespaceId"></a>

```go
func SecurityAttributeNamespaceId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciSecurityAttributeSecurityAttributesConfig <a name="DataOciSecurityAttributeSecurityAttributesConfig" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributes"

&dataocisecurityattributesecurityattributes.DataOciSecurityAttributeSecurityAttributesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SecurityAttributeNamespaceId: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.securityAttributeNamespaceId">SecurityAttributeNamespaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#security_attribute_namespace_id DataOciSecurityAttributeSecurityAttributes#security_attribute_namespace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#id DataOciSecurityAttributeSecurityAttributes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#state DataOciSecurityAttributeSecurityAttributes#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SecurityAttributeNamespaceId`<sup>Required</sup> <a name="SecurityAttributeNamespaceId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.securityAttributeNamespaceId"></a>

```go
SecurityAttributeNamespaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#security_attribute_namespace_id DataOciSecurityAttributeSecurityAttributes#security_attribute_namespace_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#filter DataOciSecurityAttributeSecurityAttributes#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#id DataOciSecurityAttributeSecurityAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#state DataOciSecurityAttributeSecurityAttributes#state}.

---

### DataOciSecurityAttributeSecurityAttributesFilter <a name="DataOciSecurityAttributeSecurityAttributesFilter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributes"

&dataocisecurityattributesecurityattributes.DataOciSecurityAttributeSecurityAttributesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#name DataOciSecurityAttributeSecurityAttributes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#values DataOciSecurityAttributeSecurityAttributes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#regex DataOciSecurityAttributeSecurityAttributes#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#name DataOciSecurityAttributeSecurityAttributes#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#values DataOciSecurityAttributeSecurityAttributes#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#regex DataOciSecurityAttributeSecurityAttributes#regex}.

---

### DataOciSecurityAttributeSecurityAttributesSecurityAttributes <a name="DataOciSecurityAttributeSecurityAttributesSecurityAttributes" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributes"

&dataocisecurityattributesecurityattributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributes {

}
```


### DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidator <a name="DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidator" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidator"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidator.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributes"

&dataocisecurityattributesecurityattributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidator {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciSecurityAttributeSecurityAttributesFilterList <a name="DataOciSecurityAttributeSecurityAttributesFilterList" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributes"

dataocisecurityattributesecurityattributes.NewDataOciSecurityAttributeSecurityAttributesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciSecurityAttributeSecurityAttributesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.get"></a>

```go
func Get(index *f64) DataOciSecurityAttributeSecurityAttributesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciSecurityAttributeSecurityAttributesFilterOutputReference <a name="DataOciSecurityAttributeSecurityAttributesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributes"

dataocisecurityattributesecurityattributes.NewDataOciSecurityAttributeSecurityAttributesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciSecurityAttributeSecurityAttributesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciSecurityAttributeSecurityAttributesSecurityAttributesList <a name="DataOciSecurityAttributeSecurityAttributesSecurityAttributesList" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributes"

dataocisecurityattributesecurityattributes.NewDataOciSecurityAttributeSecurityAttributesSecurityAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciSecurityAttributeSecurityAttributesSecurityAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.get"></a>

```go
func Get(index *f64) DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference <a name="DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributes"

dataocisecurityattributesecurityattributes.NewDataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.isRetired">IsRetired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.securityAttributeNamespaceId">SecurityAttributeNamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.securityAttributeNamespaceName">SecurityAttributeNamespaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.validator">Validator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList">DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributes">DataOciSecurityAttributeSecurityAttributesSecurityAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsRetired`<sup>Required</sup> <a name="IsRetired" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.isRetired"></a>

```go
func IsRetired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SecurityAttributeNamespaceId`<sup>Required</sup> <a name="SecurityAttributeNamespaceId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.securityAttributeNamespaceId"></a>

```go
func SecurityAttributeNamespaceId() *string
```

- *Type:* *string

---

##### `SecurityAttributeNamespaceName`<sup>Required</sup> <a name="SecurityAttributeNamespaceName" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.securityAttributeNamespaceName"></a>

```go
func SecurityAttributeNamespaceName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Validator`<sup>Required</sup> <a name="Validator" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.validator"></a>

```go
func Validator() DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList">DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciSecurityAttributeSecurityAttributesSecurityAttributes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributes">DataOciSecurityAttributeSecurityAttributesSecurityAttributes</a>

---


### DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList <a name="DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributes"

dataocisecurityattributesecurityattributes.NewDataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.get"></a>

```go
func Get(index *f64) DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference <a name="DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributes"

dataocisecurityattributesecurityattributes.NewDataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.property.validatorType">ValidatorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidator">DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValidatorType`<sup>Required</sup> <a name="ValidatorType" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.property.validatorType"></a>

```go
func ValidatorType() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidator
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidator">DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidator</a>

---




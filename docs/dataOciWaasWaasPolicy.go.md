# `dataOciWaasWaasPolicy` Submodule <a name="`dataOciWaasWaasPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWaasWaasPolicy <a name="DataOciWaasWaasPolicy" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policy oci_waas_waas_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicy(scope Construct, id *string, config DataOciWaasWaasPolicyConfig) DataOciWaasWaasPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig">DataOciWaasWaasPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig">DataOciWaasWaasPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciWaasWaasPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.DataOciWaasWaasPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.DataOciWaasWaasPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.DataOciWaasWaasPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.DataOciWaasWaasPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciWaasWaasPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciWaasWaasPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciWaasWaasPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWaasWaasPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.additionalDomains">AdditionalDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.cname">Cname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.originGroups">OriginGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList">DataOciWaasWaasPolicyOriginGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.origins">Origins</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList">DataOciWaasWaasPolicyOriginsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.policyConfig">PolicyConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList">DataOciWaasWaasPolicyPolicyConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.wafConfig">WafConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList">DataOciWaasWaasPolicyWafConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.waasPolicyIdInput">WaasPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.waasPolicyId">WaasPolicyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AdditionalDomains`<sup>Required</sup> <a name="AdditionalDomains" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.additionalDomains"></a>

```go
func AdditionalDomains() *[]*string
```

- *Type:* *[]*string

---

##### `Cname`<sup>Required</sup> <a name="Cname" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.cname"></a>

```go
func Cname() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `OriginGroups`<sup>Required</sup> <a name="OriginGroups" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.originGroups"></a>

```go
func OriginGroups() DataOciWaasWaasPolicyOriginGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList">DataOciWaasWaasPolicyOriginGroupsList</a>

---

##### `Origins`<sup>Required</sup> <a name="Origins" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.origins"></a>

```go
func Origins() DataOciWaasWaasPolicyOriginsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList">DataOciWaasWaasPolicyOriginsList</a>

---

##### `PolicyConfig`<sup>Required</sup> <a name="PolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.policyConfig"></a>

```go
func PolicyConfig() DataOciWaasWaasPolicyPolicyConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList">DataOciWaasWaasPolicyPolicyConfigList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `WafConfig`<sup>Required</sup> <a name="WafConfig" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.wafConfig"></a>

```go
func WafConfig() DataOciWaasWaasPolicyWafConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList">DataOciWaasWaasPolicyWafConfigList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `WaasPolicyIdInput`<sup>Optional</sup> <a name="WaasPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.waasPolicyIdInput"></a>

```go
func WaasPolicyIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `WaasPolicyId`<sup>Required</sup> <a name="WaasPolicyId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.waasPolicyId"></a>

```go
func WaasPolicyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWaasWaasPolicyConfig <a name="DataOciWaasWaasPolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	WaasPolicyId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.waasPolicyId">WaasPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policy#waas_policy_id DataOciWaasWaasPolicy#waas_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policy#id DataOciWaasWaasPolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `WaasPolicyId`<sup>Required</sup> <a name="WaasPolicyId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.waasPolicyId"></a>

```go
WaasPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policy#waas_policy_id DataOciWaasWaasPolicy#waas_policy_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policy#id DataOciWaasWaasPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciWaasWaasPolicyOriginGroups <a name="DataOciWaasWaasPolicyOriginGroups" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroups.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyOriginGroups {

}
```


### DataOciWaasWaasPolicyOriginGroupsOriginGroup <a name="DataOciWaasWaasPolicyOriginGroupsOriginGroup" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroup"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroup.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroup {

}
```


### DataOciWaasWaasPolicyOrigins <a name="DataOciWaasWaasPolicyOrigins" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOrigins"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOrigins.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyOrigins {

}
```


### DataOciWaasWaasPolicyOriginsCustomHeaders <a name="DataOciWaasWaasPolicyOriginsCustomHeaders" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeaders.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyOriginsCustomHeaders {

}
```


### DataOciWaasWaasPolicyPolicyConfig <a name="DataOciWaasWaasPolicyPolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyPolicyConfig {

}
```


### DataOciWaasWaasPolicyPolicyConfigHealthChecks <a name="DataOciWaasWaasPolicyPolicyConfigHealthChecks" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecks {

}
```


### DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod <a name="DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod {

}
```


### DataOciWaasWaasPolicyWafConfig <a name="DataOciWaasWaasPolicyWafConfig" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyWafConfig {

}
```


### DataOciWaasWaasPolicyWafConfigAccessRules <a name="DataOciWaasWaasPolicyWafConfigAccessRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyWafConfigAccessRules {

}
```


### DataOciWaasWaasPolicyWafConfigAccessRulesCriteria <a name="DataOciWaasWaasPolicyWafConfigAccessRulesCriteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteria.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteria {

}
```


### DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation <a name="DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation {

}
```


### DataOciWaasWaasPolicyWafConfigAddressRateLimiting <a name="DataOciWaasWaasPolicyWafConfigAddressRateLimiting" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimiting"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimiting.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimiting {

}
```


### DataOciWaasWaasPolicyWafConfigCachingRules <a name="DataOciWaasWaasPolicyWafConfigCachingRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyWafConfigCachingRules {

}
```


### DataOciWaasWaasPolicyWafConfigCachingRulesCriteria <a name="DataOciWaasWaasPolicyWafConfigCachingRulesCriteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteria.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteria {

}
```


### DataOciWaasWaasPolicyWafConfigCaptchas <a name="DataOciWaasWaasPolicyWafConfigCaptchas" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchas.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyWafConfigCaptchas {

}
```


### DataOciWaasWaasPolicyWafConfigCustomProtectionRules <a name="DataOciWaasWaasPolicyWafConfigCustomProtectionRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRules {

}
```


### DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions <a name="DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions {

}
```


### DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge <a name="DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge {

}
```


### DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings <a name="DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings {

}
```


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge {

}
```


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings {

}
```


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader {

}
```


### DataOciWaasWaasPolicyWafConfigJsChallenge <a name="DataOciWaasWaasPolicyWafConfigJsChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallenge"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallenge.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyWafConfigJsChallenge {

}
```


### DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings <a name="DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings {

}
```


### DataOciWaasWaasPolicyWafConfigJsChallengeCriteria <a name="DataOciWaasWaasPolicyWafConfigJsChallengeCriteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteria.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteria {

}
```


### DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader <a name="DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader {

}
```


### DataOciWaasWaasPolicyWafConfigProtectionSettings <a name="DataOciWaasWaasPolicyWafConfigProtectionSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyWafConfigProtectionSettings {

}
```


### DataOciWaasWaasPolicyWafConfigWhitelists <a name="DataOciWaasWaasPolicyWafConfigWhitelists" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelists"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelists.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

&dataociwaaswaaspolicy.DataOciWaasWaasPolicyWafConfigWhitelists {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWaasWaasPolicyOriginGroupsList <a name="DataOciWaasWaasPolicyOriginGroupsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyOriginGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaasWaasPolicyOriginGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.get"></a>

```go
func Get(index *f64) DataOciWaasWaasPolicyOriginGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaasWaasPolicyOriginGroupsOriginGroupList <a name="DataOciWaasWaasPolicyOriginGroupsOriginGroupList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyOriginGroupsOriginGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaasWaasPolicyOriginGroupsOriginGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.get"></a>

```go
func Get(index *f64) DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference <a name="DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.origin">Origin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroup">DataOciWaasWaasPolicyOriginGroupsOriginGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.origin"></a>

```go
func Origin() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaasWaasPolicyOriginGroupsOriginGroup
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroup">DataOciWaasWaasPolicyOriginGroupsOriginGroup</a>

---


### DataOciWaasWaasPolicyOriginGroupsOutputReference <a name="DataOciWaasWaasPolicyOriginGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyOriginGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaasWaasPolicyOriginGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.originGroup">OriginGroup</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList">DataOciWaasWaasPolicyOriginGroupsOriginGroupList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroups">DataOciWaasWaasPolicyOriginGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `OriginGroup`<sup>Required</sup> <a name="OriginGroup" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.originGroup"></a>

```go
func OriginGroup() DataOciWaasWaasPolicyOriginGroupsOriginGroupList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList">DataOciWaasWaasPolicyOriginGroupsOriginGroupList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaasWaasPolicyOriginGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroups">DataOciWaasWaasPolicyOriginGroups</a>

---


### DataOciWaasWaasPolicyOriginsCustomHeadersList <a name="DataOciWaasWaasPolicyOriginsCustomHeadersList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyOriginsCustomHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaasWaasPolicyOriginsCustomHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.get"></a>

```go
func Get(index *f64) DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference <a name="DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyOriginsCustomHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeaders">DataOciWaasWaasPolicyOriginsCustomHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaasWaasPolicyOriginsCustomHeaders
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeaders">DataOciWaasWaasPolicyOriginsCustomHeaders</a>

---


### DataOciWaasWaasPolicyOriginsList <a name="DataOciWaasWaasPolicyOriginsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyOriginsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaasWaasPolicyOriginsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.get"></a>

```go
func Get(index *f64) DataOciWaasWaasPolicyOriginsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaasWaasPolicyOriginsOutputReference <a name="DataOciWaasWaasPolicyOriginsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyOriginsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaasWaasPolicyOriginsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.customHeaders">CustomHeaders</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList">DataOciWaasWaasPolicyOriginsCustomHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.httpPort">HttpPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.httpsPort">HttpsPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOrigins">DataOciWaasWaasPolicyOrigins</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomHeaders`<sup>Required</sup> <a name="CustomHeaders" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.customHeaders"></a>

```go
func CustomHeaders() DataOciWaasWaasPolicyOriginsCustomHeadersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList">DataOciWaasWaasPolicyOriginsCustomHeadersList</a>

---

##### `HttpPort`<sup>Required</sup> <a name="HttpPort" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.httpPort"></a>

```go
func HttpPort() *f64
```

- *Type:* *f64

---

##### `HttpsPort`<sup>Required</sup> <a name="HttpsPort" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.httpsPort"></a>

```go
func HttpsPort() *f64
```

- *Type:* *f64

---

##### `Label`<sup>Required</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaasWaasPolicyOrigins
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOrigins">DataOciWaasWaasPolicyOrigins</a>

---


### DataOciWaasWaasPolicyPolicyConfigHealthChecksList <a name="DataOciWaasWaasPolicyPolicyConfigHealthChecksList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyPolicyConfigHealthChecksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaasWaasPolicyPolicyConfigHealthChecksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.get"></a>

```go
func Get(index *f64) DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference <a name="DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.expectedResponseCodeGroup">ExpectedResponseCodeGroup</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.expectedResponseText">ExpectedResponseText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.headers">Headers</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.healthyThreshold">HealthyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.intervalInSeconds">IntervalInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.isResponseTextCheckEnabled">IsResponseTextCheckEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecks">DataOciWaasWaasPolicyPolicyConfigHealthChecks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpectedResponseCodeGroup`<sup>Required</sup> <a name="ExpectedResponseCodeGroup" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.expectedResponseCodeGroup"></a>

```go
func ExpectedResponseCodeGroup() *[]*string
```

- *Type:* *[]*string

---

##### `ExpectedResponseText`<sup>Required</sup> <a name="ExpectedResponseText" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.expectedResponseText"></a>

```go
func ExpectedResponseText() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.headers"></a>

```go
func Headers() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.healthyThreshold"></a>

```go
func HealthyThreshold() *f64
```

- *Type:* *f64

---

##### `IntervalInSeconds`<sup>Required</sup> <a name="IntervalInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.intervalInSeconds"></a>

```go
func IntervalInSeconds() *f64
```

- *Type:* *f64

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsResponseTextCheckEnabled`<sup>Required</sup> <a name="IsResponseTextCheckEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.isResponseTextCheckEnabled"></a>

```go
func IsResponseTextCheckEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Method`<sup>Required</sup> <a name="Method" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.unhealthyThreshold"></a>

```go
func UnhealthyThreshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaasWaasPolicyPolicyConfigHealthChecks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecks">DataOciWaasWaasPolicyPolicyConfigHealthChecks</a>

---


### DataOciWaasWaasPolicyPolicyConfigList <a name="DataOciWaasWaasPolicyPolicyConfigList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyPolicyConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaasWaasPolicyPolicyConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.get"></a>

```go
func Get(index *f64) DataOciWaasWaasPolicyPolicyConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList <a name="DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.get"></a>

```go
func Get(index *f64) DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference <a name="DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.expirationTimeInSeconds">ExpirationTimeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod">DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `ExpirationTimeInSeconds`<sup>Required</sup> <a name="ExpirationTimeInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.expirationTimeInSeconds"></a>

```go
func ExpirationTimeInSeconds() *f64
```

- *Type:* *f64

---

##### `Method`<sup>Required</sup> <a name="Method" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod">DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod</a>

---


### DataOciWaasWaasPolicyPolicyConfigOutputReference <a name="DataOciWaasWaasPolicyPolicyConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyPolicyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaasWaasPolicyPolicyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.cipherGroup">CipherGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.clientAddressHeader">ClientAddressHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.healthChecks">HealthChecks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList">DataOciWaasWaasPolicyPolicyConfigHealthChecksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isBehindCdn">IsBehindCdn</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isCacheControlRespected">IsCacheControlRespected</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isHttpsEnabled">IsHttpsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isHttpsForced">IsHttpsForced</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isOriginCompressionEnabled">IsOriginCompressionEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isResponseBufferingEnabled">IsResponseBufferingEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isSniEnabled">IsSniEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.loadBalancingMethod">LoadBalancingMethod</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList">DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.tlsProtocols">TlsProtocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.websocketPathPrefixes">WebsocketPathPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfig">DataOciWaasWaasPolicyPolicyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `CipherGroup`<sup>Required</sup> <a name="CipherGroup" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.cipherGroup"></a>

```go
func CipherGroup() *string
```

- *Type:* *string

---

##### `ClientAddressHeader`<sup>Required</sup> <a name="ClientAddressHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.clientAddressHeader"></a>

```go
func ClientAddressHeader() *string
```

- *Type:* *string

---

##### `HealthChecks`<sup>Required</sup> <a name="HealthChecks" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.healthChecks"></a>

```go
func HealthChecks() DataOciWaasWaasPolicyPolicyConfigHealthChecksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList">DataOciWaasWaasPolicyPolicyConfigHealthChecksList</a>

---

##### `IsBehindCdn`<sup>Required</sup> <a name="IsBehindCdn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isBehindCdn"></a>

```go
func IsBehindCdn() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsCacheControlRespected`<sup>Required</sup> <a name="IsCacheControlRespected" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isCacheControlRespected"></a>

```go
func IsCacheControlRespected() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsHttpsEnabled`<sup>Required</sup> <a name="IsHttpsEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isHttpsEnabled"></a>

```go
func IsHttpsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsHttpsForced`<sup>Required</sup> <a name="IsHttpsForced" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isHttpsForced"></a>

```go
func IsHttpsForced() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsOriginCompressionEnabled`<sup>Required</sup> <a name="IsOriginCompressionEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isOriginCompressionEnabled"></a>

```go
func IsOriginCompressionEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsResponseBufferingEnabled`<sup>Required</sup> <a name="IsResponseBufferingEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isResponseBufferingEnabled"></a>

```go
func IsResponseBufferingEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSniEnabled`<sup>Required</sup> <a name="IsSniEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isSniEnabled"></a>

```go
func IsSniEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LoadBalancingMethod`<sup>Required</sup> <a name="LoadBalancingMethod" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.loadBalancingMethod"></a>

```go
func LoadBalancingMethod() DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList">DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList</a>

---

##### `TlsProtocols`<sup>Required</sup> <a name="TlsProtocols" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.tlsProtocols"></a>

```go
func TlsProtocols() *[]*string
```

- *Type:* *[]*string

---

##### `WebsocketPathPrefixes`<sup>Required</sup> <a name="WebsocketPathPrefixes" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.websocketPathPrefixes"></a>

```go
func WebsocketPathPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaasWaasPolicyPolicyConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfig">DataOciWaasWaasPolicyPolicyConfig</a>

---


### DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList <a name="DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.get"></a>

```go
func Get(index *f64) DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference <a name="DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.isCaseSensitive">IsCaseSensitive</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteria">DataOciWaasWaasPolicyWafConfigAccessRulesCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `IsCaseSensitive`<sup>Required</sup> <a name="IsCaseSensitive" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.isCaseSensitive"></a>

```go
func IsCaseSensitive() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaasWaasPolicyWafConfigAccessRulesCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteria">DataOciWaasWaasPolicyWafConfigAccessRulesCriteria</a>

---


### DataOciWaasWaasPolicyWafConfigAccessRulesList <a name="DataOciWaasWaasPolicyWafConfigAccessRulesList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigAccessRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaasWaasPolicyWafConfigAccessRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.get"></a>

```go
func Get(index *f64) DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference <a name="DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigAccessRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockAction">BlockAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageCode">BlockErrorPageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageDescription">BlockErrorPageDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageMessage">BlockErrorPageMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockResponseCode">BlockResponseCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.bypassChallenges">BypassChallenges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaFooter">CaptchaFooter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaHeader">CaptchaHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaSubmitLabel">CaptchaSubmitLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaTitle">CaptchaTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.criteria">Criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList">DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.redirectResponseCode">RedirectResponseCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.redirectUrl">RedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.responseHeaderManipulation">ResponseHeaderManipulation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList">DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRules">DataOciWaasWaasPolicyWafConfigAccessRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `BlockAction`<sup>Required</sup> <a name="BlockAction" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockAction"></a>

```go
func BlockAction() *string
```

- *Type:* *string

---

##### `BlockErrorPageCode`<sup>Required</sup> <a name="BlockErrorPageCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageCode"></a>

```go
func BlockErrorPageCode() *string
```

- *Type:* *string

---

##### `BlockErrorPageDescription`<sup>Required</sup> <a name="BlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageDescription"></a>

```go
func BlockErrorPageDescription() *string
```

- *Type:* *string

---

##### `BlockErrorPageMessage`<sup>Required</sup> <a name="BlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageMessage"></a>

```go
func BlockErrorPageMessage() *string
```

- *Type:* *string

---

##### `BlockResponseCode`<sup>Required</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockResponseCode"></a>

```go
func BlockResponseCode() *f64
```

- *Type:* *f64

---

##### `BypassChallenges`<sup>Required</sup> <a name="BypassChallenges" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.bypassChallenges"></a>

```go
func BypassChallenges() *[]*string
```

- *Type:* *[]*string

---

##### `CaptchaFooter`<sup>Required</sup> <a name="CaptchaFooter" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaFooter"></a>

```go
func CaptchaFooter() *string
```

- *Type:* *string

---

##### `CaptchaHeader`<sup>Required</sup> <a name="CaptchaHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaHeader"></a>

```go
func CaptchaHeader() *string
```

- *Type:* *string

---

##### `CaptchaSubmitLabel`<sup>Required</sup> <a name="CaptchaSubmitLabel" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaSubmitLabel"></a>

```go
func CaptchaSubmitLabel() *string
```

- *Type:* *string

---

##### `CaptchaTitle`<sup>Required</sup> <a name="CaptchaTitle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaTitle"></a>

```go
func CaptchaTitle() *string
```

- *Type:* *string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.criteria"></a>

```go
func Criteria() DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList">DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RedirectResponseCode`<sup>Required</sup> <a name="RedirectResponseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.redirectResponseCode"></a>

```go
func RedirectResponseCode() *string
```

- *Type:* *string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.redirectUrl"></a>

```go
func RedirectUrl() *string
```

- *Type:* *string

---

##### `ResponseHeaderManipulation`<sup>Required</sup> <a name="ResponseHeaderManipulation" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.responseHeaderManipulation"></a>

```go
func ResponseHeaderManipulation() DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList">DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaasWaasPolicyWafConfigAccessRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRules">DataOciWaasWaasPolicyWafConfigAccessRules</a>

---


### DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList <a name="DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.get"></a>

```go
func Get(index *f64) DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference <a name="DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.header">Header</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation">DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Header`<sup>Required</sup> <a name="Header" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.header"></a>

```go
func Header() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation">DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation</a>

---


### DataOciWaasWaasPolicyWafConfigAddressRateLimitingList <a name="DataOciWaasWaasPolicyWafConfigAddressRateLimitingList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigAddressRateLimitingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaasWaasPolicyWafConfigAddressRateLimitingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.get"></a>

```go
func Get(index *f64) DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference <a name="DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.allowedRatePerAddress">AllowedRatePerAddress</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.blockResponseCode">BlockResponseCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.maxDelayedCountPerAddress">MaxDelayedCountPerAddress</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimiting">DataOciWaasWaasPolicyWafConfigAddressRateLimiting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedRatePerAddress`<sup>Required</sup> <a name="AllowedRatePerAddress" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.allowedRatePerAddress"></a>

```go
func AllowedRatePerAddress() *f64
```

- *Type:* *f64

---

##### `BlockResponseCode`<sup>Required</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.blockResponseCode"></a>

```go
func BlockResponseCode() *f64
```

- *Type:* *f64

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MaxDelayedCountPerAddress`<sup>Required</sup> <a name="MaxDelayedCountPerAddress" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.maxDelayedCountPerAddress"></a>

```go
func MaxDelayedCountPerAddress() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaasWaasPolicyWafConfigAddressRateLimiting
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimiting">DataOciWaasWaasPolicyWafConfigAddressRateLimiting</a>

---


### DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList <a name="DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.get"></a>

```go
func Get(index *f64) DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference <a name="DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteria">DataOciWaasWaasPolicyWafConfigCachingRulesCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaasWaasPolicyWafConfigCachingRulesCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteria">DataOciWaasWaasPolicyWafConfigCachingRulesCriteria</a>

---


### DataOciWaasWaasPolicyWafConfigCachingRulesList <a name="DataOciWaasWaasPolicyWafConfigCachingRulesList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigCachingRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaasWaasPolicyWafConfigCachingRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.get"></a>

```go
func Get(index *f64) DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference <a name="DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigCachingRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.cachingDuration">CachingDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.clientCachingDuration">ClientCachingDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.criteria">Criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList">DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.isClientCachingEnabled">IsClientCachingEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRules">DataOciWaasWaasPolicyWafConfigCachingRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `CachingDuration`<sup>Required</sup> <a name="CachingDuration" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.cachingDuration"></a>

```go
func CachingDuration() *string
```

- *Type:* *string

---

##### `ClientCachingDuration`<sup>Required</sup> <a name="ClientCachingDuration" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.clientCachingDuration"></a>

```go
func ClientCachingDuration() *string
```

- *Type:* *string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.criteria"></a>

```go
func Criteria() DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList">DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList</a>

---

##### `IsClientCachingEnabled`<sup>Required</sup> <a name="IsClientCachingEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.isClientCachingEnabled"></a>

```go
func IsClientCachingEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaasWaasPolicyWafConfigCachingRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRules">DataOciWaasWaasPolicyWafConfigCachingRules</a>

---


### DataOciWaasWaasPolicyWafConfigCaptchasList <a name="DataOciWaasWaasPolicyWafConfigCaptchasList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigCaptchasList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaasWaasPolicyWafConfigCaptchasList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.get"></a>

```go
func Get(index *f64) DataOciWaasWaasPolicyWafConfigCaptchasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaasWaasPolicyWafConfigCaptchasOutputReference <a name="DataOciWaasWaasPolicyWafConfigCaptchasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigCaptchasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaasWaasPolicyWafConfigCaptchasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.failureMessage">FailureMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.footerText">FooterText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.headerText">HeaderText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.sessionExpirationInSeconds">SessionExpirationInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.submitLabel">SubmitLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchas">DataOciWaasWaasPolicyWafConfigCaptchas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FailureMessage`<sup>Required</sup> <a name="FailureMessage" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.failureMessage"></a>

```go
func FailureMessage() *string
```

- *Type:* *string

---

##### `FooterText`<sup>Required</sup> <a name="FooterText" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.footerText"></a>

```go
func FooterText() *string
```

- *Type:* *string

---

##### `HeaderText`<sup>Required</sup> <a name="HeaderText" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.headerText"></a>

```go
func HeaderText() *string
```

- *Type:* *string

---

##### `SessionExpirationInSeconds`<sup>Required</sup> <a name="SessionExpirationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.sessionExpirationInSeconds"></a>

```go
func SessionExpirationInSeconds() *f64
```

- *Type:* *f64

---

##### `SubmitLabel`<sup>Required</sup> <a name="SubmitLabel" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.submitLabel"></a>

```go
func SubmitLabel() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaasWaasPolicyWafConfigCaptchas
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchas">DataOciWaasWaasPolicyWafConfigCaptchas</a>

---


### DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList <a name="DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.get"></a>

```go
func Get(index *f64) DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference <a name="DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.exclusions">Exclusions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions">DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.exclusions"></a>

```go
func Exclusions() *[]*string
```

- *Type:* *[]*string

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions">DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions</a>

---


### DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList <a name="DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigCustomProtectionRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.get"></a>

```go
func Get(index *f64) DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference <a name="DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.exclusions">Exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList">DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRules">DataOciWaasWaasPolicyWafConfigCustomProtectionRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.exclusions"></a>

```go
func Exclusions() DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList">DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaasWaasPolicyWafConfigCustomProtectionRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRules">DataOciWaasWaasPolicyWafConfigCustomProtectionRules</a>

---


### DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList <a name="DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.get"></a>

```go
func Get(index *f64) DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference <a name="DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockAction">BlockAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageCode">BlockErrorPageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription">BlockErrorPageDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage">BlockErrorPageMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockResponseCode">BlockResponseCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaFooter">CaptchaFooter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaHeader">CaptchaHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel">CaptchaSubmitLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaTitle">CaptchaTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockAction`<sup>Required</sup> <a name="BlockAction" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockAction"></a>

```go
func BlockAction() *string
```

- *Type:* *string

---

##### `BlockErrorPageCode`<sup>Required</sup> <a name="BlockErrorPageCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageCode"></a>

```go
func BlockErrorPageCode() *string
```

- *Type:* *string

---

##### `BlockErrorPageDescription`<sup>Required</sup> <a name="BlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription"></a>

```go
func BlockErrorPageDescription() *string
```

- *Type:* *string

---

##### `BlockErrorPageMessage`<sup>Required</sup> <a name="BlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage"></a>

```go
func BlockErrorPageMessage() *string
```

- *Type:* *string

---

##### `BlockResponseCode`<sup>Required</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockResponseCode"></a>

```go
func BlockResponseCode() *f64
```

- *Type:* *f64

---

##### `CaptchaFooter`<sup>Required</sup> <a name="CaptchaFooter" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaFooter"></a>

```go
func CaptchaFooter() *string
```

- *Type:* *string

---

##### `CaptchaHeader`<sup>Required</sup> <a name="CaptchaHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaHeader"></a>

```go
func CaptchaHeader() *string
```

- *Type:* *string

---

##### `CaptchaSubmitLabel`<sup>Required</sup> <a name="CaptchaSubmitLabel" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel"></a>

```go
func CaptchaSubmitLabel() *string
```

- *Type:* *string

---

##### `CaptchaTitle`<sup>Required</sup> <a name="CaptchaTitle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaTitle"></a>

```go
func CaptchaTitle() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings</a>

---


### DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList <a name="DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.get"></a>

```go
func Get(index *f64) DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference <a name="DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.actionExpirationInSeconds">ActionExpirationInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.challengeSettings">ChallengeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.failureThresholdExpirationInSeconds">FailureThresholdExpirationInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCount">MaxAddressCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCountExpirationInSeconds">MaxAddressCountExpirationInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `ActionExpirationInSeconds`<sup>Required</sup> <a name="ActionExpirationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.actionExpirationInSeconds"></a>

```go
func ActionExpirationInSeconds() *f64
```

- *Type:* *f64

---

##### `ChallengeSettings`<sup>Required</sup> <a name="ChallengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.challengeSettings"></a>

```go
func ChallengeSettings() DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList</a>

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.failureThreshold"></a>

```go
func FailureThreshold() *f64
```

- *Type:* *f64

---

##### `FailureThresholdExpirationInSeconds`<sup>Required</sup> <a name="FailureThresholdExpirationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.failureThresholdExpirationInSeconds"></a>

```go
func FailureThresholdExpirationInSeconds() *f64
```

- *Type:* *f64

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MaxAddressCount`<sup>Required</sup> <a name="MaxAddressCount" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCount"></a>

```go
func MaxAddressCount() *f64
```

- *Type:* *f64

---

##### `MaxAddressCountExpirationInSeconds`<sup>Required</sup> <a name="MaxAddressCountExpirationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCountExpirationInSeconds"></a>

```go
func MaxAddressCountExpirationInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge</a>

---


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.get"></a>

```go
func Get(index *f64) DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockAction">BlockAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageCode">BlockErrorPageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription">BlockErrorPageDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage">BlockErrorPageMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockResponseCode">BlockResponseCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaFooter">CaptchaFooter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaHeader">CaptchaHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel">CaptchaSubmitLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaTitle">CaptchaTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockAction`<sup>Required</sup> <a name="BlockAction" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockAction"></a>

```go
func BlockAction() *string
```

- *Type:* *string

---

##### `BlockErrorPageCode`<sup>Required</sup> <a name="BlockErrorPageCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageCode"></a>

```go
func BlockErrorPageCode() *string
```

- *Type:* *string

---

##### `BlockErrorPageDescription`<sup>Required</sup> <a name="BlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription"></a>

```go
func BlockErrorPageDescription() *string
```

- *Type:* *string

---

##### `BlockErrorPageMessage`<sup>Required</sup> <a name="BlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage"></a>

```go
func BlockErrorPageMessage() *string
```

- *Type:* *string

---

##### `BlockResponseCode`<sup>Required</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockResponseCode"></a>

```go
func BlockResponseCode() *f64
```

- *Type:* *f64

---

##### `CaptchaFooter`<sup>Required</sup> <a name="CaptchaFooter" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaFooter"></a>

```go
func CaptchaFooter() *string
```

- *Type:* *string

---

##### `CaptchaHeader`<sup>Required</sup> <a name="CaptchaHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaHeader"></a>

```go
func CaptchaHeader() *string
```

- *Type:* *string

---

##### `CaptchaSubmitLabel`<sup>Required</sup> <a name="CaptchaSubmitLabel" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel"></a>

```go
func CaptchaSubmitLabel() *string
```

- *Type:* *string

---

##### `CaptchaTitle`<sup>Required</sup> <a name="CaptchaTitle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaTitle"></a>

```go
func CaptchaTitle() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings</a>

---


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.get"></a>

```go
func Get(index *f64) DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.actionExpirationInSeconds">ActionExpirationInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.challengeSettings">ChallengeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.failureThresholdExpirationInSeconds">FailureThresholdExpirationInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.interactionThreshold">InteractionThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.isNatEnabled">IsNatEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.recordingPeriodInSeconds">RecordingPeriodInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.setHttpHeader">SetHttpHeader</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge">DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `ActionExpirationInSeconds`<sup>Required</sup> <a name="ActionExpirationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.actionExpirationInSeconds"></a>

```go
func ActionExpirationInSeconds() *f64
```

- *Type:* *f64

---

##### `ChallengeSettings`<sup>Required</sup> <a name="ChallengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.challengeSettings"></a>

```go
func ChallengeSettings() DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList</a>

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.failureThreshold"></a>

```go
func FailureThreshold() *f64
```

- *Type:* *f64

---

##### `FailureThresholdExpirationInSeconds`<sup>Required</sup> <a name="FailureThresholdExpirationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.failureThresholdExpirationInSeconds"></a>

```go
func FailureThresholdExpirationInSeconds() *f64
```

- *Type:* *f64

---

##### `InteractionThreshold`<sup>Required</sup> <a name="InteractionThreshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.interactionThreshold"></a>

```go
func InteractionThreshold() *f64
```

- *Type:* *f64

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsNatEnabled`<sup>Required</sup> <a name="IsNatEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.isNatEnabled"></a>

```go
func IsNatEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RecordingPeriodInSeconds`<sup>Required</sup> <a name="RecordingPeriodInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.recordingPeriodInSeconds"></a>

```go
func RecordingPeriodInSeconds() *f64
```

- *Type:* *f64

---

##### `SetHttpHeader`<sup>Required</sup> <a name="SetHttpHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.setHttpHeader"></a>

```go
func SetHttpHeader() DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge">DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge</a>

---


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.get"></a>

```go
func Get(index *f64) DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader</a>

---


### DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList <a name="DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.get"></a>

```go
func Get(index *f64) DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference <a name="DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockAction">BlockAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageCode">BlockErrorPageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription">BlockErrorPageDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage">BlockErrorPageMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockResponseCode">BlockResponseCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaFooter">CaptchaFooter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaHeader">CaptchaHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel">CaptchaSubmitLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaTitle">CaptchaTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings">DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockAction`<sup>Required</sup> <a name="BlockAction" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockAction"></a>

```go
func BlockAction() *string
```

- *Type:* *string

---

##### `BlockErrorPageCode`<sup>Required</sup> <a name="BlockErrorPageCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageCode"></a>

```go
func BlockErrorPageCode() *string
```

- *Type:* *string

---

##### `BlockErrorPageDescription`<sup>Required</sup> <a name="BlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription"></a>

```go
func BlockErrorPageDescription() *string
```

- *Type:* *string

---

##### `BlockErrorPageMessage`<sup>Required</sup> <a name="BlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage"></a>

```go
func BlockErrorPageMessage() *string
```

- *Type:* *string

---

##### `BlockResponseCode`<sup>Required</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockResponseCode"></a>

```go
func BlockResponseCode() *f64
```

- *Type:* *f64

---

##### `CaptchaFooter`<sup>Required</sup> <a name="CaptchaFooter" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaFooter"></a>

```go
func CaptchaFooter() *string
```

- *Type:* *string

---

##### `CaptchaHeader`<sup>Required</sup> <a name="CaptchaHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaHeader"></a>

```go
func CaptchaHeader() *string
```

- *Type:* *string

---

##### `CaptchaSubmitLabel`<sup>Required</sup> <a name="CaptchaSubmitLabel" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel"></a>

```go
func CaptchaSubmitLabel() *string
```

- *Type:* *string

---

##### `CaptchaTitle`<sup>Required</sup> <a name="CaptchaTitle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaTitle"></a>

```go
func CaptchaTitle() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings">DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings</a>

---


### DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList <a name="DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.get"></a>

```go
func Get(index *f64) DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference <a name="DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.isCaseSensitive">IsCaseSensitive</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteria">DataOciWaasWaasPolicyWafConfigJsChallengeCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `IsCaseSensitive`<sup>Required</sup> <a name="IsCaseSensitive" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.isCaseSensitive"></a>

```go
func IsCaseSensitive() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaasWaasPolicyWafConfigJsChallengeCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteria">DataOciWaasWaasPolicyWafConfigJsChallengeCriteria</a>

---


### DataOciWaasWaasPolicyWafConfigJsChallengeList <a name="DataOciWaasWaasPolicyWafConfigJsChallengeList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigJsChallengeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaasWaasPolicyWafConfigJsChallengeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.get"></a>

```go
func Get(index *f64) DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference <a name="DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigJsChallengeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.actionExpirationInSeconds">ActionExpirationInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.areRedirectsChallenged">AreRedirectsChallenged</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.challengeSettings">ChallengeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList">DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.criteria">Criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList">DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.isNatEnabled">IsNatEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.setHttpHeader">SetHttpHeader</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList">DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallenge">DataOciWaasWaasPolicyWafConfigJsChallenge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `ActionExpirationInSeconds`<sup>Required</sup> <a name="ActionExpirationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.actionExpirationInSeconds"></a>

```go
func ActionExpirationInSeconds() *f64
```

- *Type:* *f64

---

##### `AreRedirectsChallenged`<sup>Required</sup> <a name="AreRedirectsChallenged" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.areRedirectsChallenged"></a>

```go
func AreRedirectsChallenged() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ChallengeSettings`<sup>Required</sup> <a name="ChallengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.challengeSettings"></a>

```go
func ChallengeSettings() DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList">DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList</a>

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.criteria"></a>

```go
func Criteria() DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList">DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList</a>

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.failureThreshold"></a>

```go
func FailureThreshold() *f64
```

- *Type:* *f64

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsNatEnabled`<sup>Required</sup> <a name="IsNatEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.isNatEnabled"></a>

```go
func IsNatEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SetHttpHeader`<sup>Required</sup> <a name="SetHttpHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.setHttpHeader"></a>

```go
func SetHttpHeader() DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList">DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaasWaasPolicyWafConfigJsChallenge
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallenge">DataOciWaasWaasPolicyWafConfigJsChallenge</a>

---


### DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList <a name="DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.get"></a>

```go
func Get(index *f64) DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference <a name="DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader">DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader">DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader</a>

---


### DataOciWaasWaasPolicyWafConfigList <a name="DataOciWaasWaasPolicyWafConfigList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaasWaasPolicyWafConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.get"></a>

```go
func Get(index *f64) DataOciWaasWaasPolicyWafConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaasWaasPolicyWafConfigOutputReference <a name="DataOciWaasWaasPolicyWafConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaasWaasPolicyWafConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.accessRules">AccessRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList">DataOciWaasWaasPolicyWafConfigAccessRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.addressRateLimiting">AddressRateLimiting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList">DataOciWaasWaasPolicyWafConfigAddressRateLimitingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.cachingRules">CachingRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList">DataOciWaasWaasPolicyWafConfigCachingRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.captchas">Captchas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList">DataOciWaasWaasPolicyWafConfigCaptchasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.customProtectionRules">CustomProtectionRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList">DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.deviceFingerprintChallenge">DeviceFingerprintChallenge</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.humanInteractionChallenge">HumanInteractionChallenge</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.jsChallenge">JsChallenge</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList">DataOciWaasWaasPolicyWafConfigJsChallengeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.origin">Origin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.originGroups">OriginGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.protectionSettings">ProtectionSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList">DataOciWaasWaasPolicyWafConfigProtectionSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.whitelists">Whitelists</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList">DataOciWaasWaasPolicyWafConfigWhitelistsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfig">DataOciWaasWaasPolicyWafConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessRules`<sup>Required</sup> <a name="AccessRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.accessRules"></a>

```go
func AccessRules() DataOciWaasWaasPolicyWafConfigAccessRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList">DataOciWaasWaasPolicyWafConfigAccessRulesList</a>

---

##### `AddressRateLimiting`<sup>Required</sup> <a name="AddressRateLimiting" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.addressRateLimiting"></a>

```go
func AddressRateLimiting() DataOciWaasWaasPolicyWafConfigAddressRateLimitingList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList">DataOciWaasWaasPolicyWafConfigAddressRateLimitingList</a>

---

##### `CachingRules`<sup>Required</sup> <a name="CachingRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.cachingRules"></a>

```go
func CachingRules() DataOciWaasWaasPolicyWafConfigCachingRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList">DataOciWaasWaasPolicyWafConfigCachingRulesList</a>

---

##### `Captchas`<sup>Required</sup> <a name="Captchas" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.captchas"></a>

```go
func Captchas() DataOciWaasWaasPolicyWafConfigCaptchasList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList">DataOciWaasWaasPolicyWafConfigCaptchasList</a>

---

##### `CustomProtectionRules`<sup>Required</sup> <a name="CustomProtectionRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.customProtectionRules"></a>

```go
func CustomProtectionRules() DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList">DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList</a>

---

##### `DeviceFingerprintChallenge`<sup>Required</sup> <a name="DeviceFingerprintChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.deviceFingerprintChallenge"></a>

```go
func DeviceFingerprintChallenge() DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList</a>

---

##### `HumanInteractionChallenge`<sup>Required</sup> <a name="HumanInteractionChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.humanInteractionChallenge"></a>

```go
func HumanInteractionChallenge() DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList</a>

---

##### `JsChallenge`<sup>Required</sup> <a name="JsChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.jsChallenge"></a>

```go
func JsChallenge() DataOciWaasWaasPolicyWafConfigJsChallengeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList">DataOciWaasWaasPolicyWafConfigJsChallengeList</a>

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.origin"></a>

```go
func Origin() *string
```

- *Type:* *string

---

##### `OriginGroups`<sup>Required</sup> <a name="OriginGroups" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.originGroups"></a>

```go
func OriginGroups() *[]*string
```

- *Type:* *[]*string

---

##### `ProtectionSettings`<sup>Required</sup> <a name="ProtectionSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.protectionSettings"></a>

```go
func ProtectionSettings() DataOciWaasWaasPolicyWafConfigProtectionSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList">DataOciWaasWaasPolicyWafConfigProtectionSettingsList</a>

---

##### `Whitelists`<sup>Required</sup> <a name="Whitelists" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.whitelists"></a>

```go
func Whitelists() DataOciWaasWaasPolicyWafConfigWhitelistsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList">DataOciWaasWaasPolicyWafConfigWhitelistsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaasWaasPolicyWafConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfig">DataOciWaasWaasPolicyWafConfig</a>

---


### DataOciWaasWaasPolicyWafConfigProtectionSettingsList <a name="DataOciWaasWaasPolicyWafConfigProtectionSettingsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigProtectionSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaasWaasPolicyWafConfigProtectionSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.get"></a>

```go
func Get(index *f64) DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference <a name="DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.allowedHttpMethods">AllowedHttpMethods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockAction">BlockAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageCode">BlockErrorPageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageDescription">BlockErrorPageDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageMessage">BlockErrorPageMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockResponseCode">BlockResponseCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.isResponseInspected">IsResponseInspected</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxArgumentCount">MaxArgumentCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxNameLengthPerArgument">MaxNameLengthPerArgument</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxResponseSizeInKiB">MaxResponseSizeInKiB</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxTotalNameLengthOfArguments">MaxTotalNameLengthOfArguments</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.mediaTypes">MediaTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.recommendationsPeriodInDays">RecommendationsPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettings">DataOciWaasWaasPolicyWafConfigProtectionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedHttpMethods`<sup>Required</sup> <a name="AllowedHttpMethods" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.allowedHttpMethods"></a>

```go
func AllowedHttpMethods() *[]*string
```

- *Type:* *[]*string

---

##### `BlockAction`<sup>Required</sup> <a name="BlockAction" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockAction"></a>

```go
func BlockAction() *string
```

- *Type:* *string

---

##### `BlockErrorPageCode`<sup>Required</sup> <a name="BlockErrorPageCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageCode"></a>

```go
func BlockErrorPageCode() *string
```

- *Type:* *string

---

##### `BlockErrorPageDescription`<sup>Required</sup> <a name="BlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageDescription"></a>

```go
func BlockErrorPageDescription() *string
```

- *Type:* *string

---

##### `BlockErrorPageMessage`<sup>Required</sup> <a name="BlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageMessage"></a>

```go
func BlockErrorPageMessage() *string
```

- *Type:* *string

---

##### `BlockResponseCode`<sup>Required</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockResponseCode"></a>

```go
func BlockResponseCode() *f64
```

- *Type:* *f64

---

##### `IsResponseInspected`<sup>Required</sup> <a name="IsResponseInspected" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.isResponseInspected"></a>

```go
func IsResponseInspected() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MaxArgumentCount`<sup>Required</sup> <a name="MaxArgumentCount" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxArgumentCount"></a>

```go
func MaxArgumentCount() *f64
```

- *Type:* *f64

---

##### `MaxNameLengthPerArgument`<sup>Required</sup> <a name="MaxNameLengthPerArgument" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxNameLengthPerArgument"></a>

```go
func MaxNameLengthPerArgument() *f64
```

- *Type:* *f64

---

##### `MaxResponseSizeInKiB`<sup>Required</sup> <a name="MaxResponseSizeInKiB" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxResponseSizeInKiB"></a>

```go
func MaxResponseSizeInKiB() *f64
```

- *Type:* *f64

---

##### `MaxTotalNameLengthOfArguments`<sup>Required</sup> <a name="MaxTotalNameLengthOfArguments" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxTotalNameLengthOfArguments"></a>

```go
func MaxTotalNameLengthOfArguments() *f64
```

- *Type:* *f64

---

##### `MediaTypes`<sup>Required</sup> <a name="MediaTypes" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.mediaTypes"></a>

```go
func MediaTypes() *[]*string
```

- *Type:* *[]*string

---

##### `RecommendationsPeriodInDays`<sup>Required</sup> <a name="RecommendationsPeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.recommendationsPeriodInDays"></a>

```go
func RecommendationsPeriodInDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaasWaasPolicyWafConfigProtectionSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettings">DataOciWaasWaasPolicyWafConfigProtectionSettings</a>

---


### DataOciWaasWaasPolicyWafConfigWhitelistsList <a name="DataOciWaasWaasPolicyWafConfigWhitelistsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigWhitelistsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaasWaasPolicyWafConfigWhitelistsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.get"></a>

```go
func Get(index *f64) DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference <a name="DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaaswaaspolicy"

dataociwaaswaaspolicy.NewDataOciWaasWaasPolicyWafConfigWhitelistsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.addresses">Addresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.addressLists">AddressLists</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelists">DataOciWaasWaasPolicyWafConfigWhitelists</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.addresses"></a>

```go
func Addresses() *[]*string
```

- *Type:* *[]*string

---

##### `AddressLists`<sup>Required</sup> <a name="AddressLists" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.addressLists"></a>

```go
func AddressLists() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaasWaasPolicyWafConfigWhitelists
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelists">DataOciWaasWaasPolicyWafConfigWhitelists</a>

---




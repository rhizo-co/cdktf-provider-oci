# `dataOciOpsiExadataInsight` Submodule <a name="`dataOciOpsiExadataInsight` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiExadataInsight <a name="DataOciOpsiExadataInsight" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_exadata_insight oci_opsi_exadata_insight}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsight"

dataociopsiexadatainsight.NewDataOciOpsiExadataInsight(scope Construct, id *string, config DataOciOpsiExadataInsightConfig) DataOciOpsiExadataInsight
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightConfig">DataOciOpsiExadataInsightConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightConfig">DataOciOpsiExadataInsightConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiExadataInsight resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsight"

dataociopsiexadatainsight.DataOciOpsiExadataInsight_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsight"

dataociopsiexadatainsight.DataOciOpsiExadataInsight_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsight"

dataociopsiexadatainsight.DataOciOpsiExadataInsight_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsight"

dataociopsiexadatainsight.DataOciOpsiExadataInsight_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOpsiExadataInsight resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOpsiExadataInsight to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOpsiExadataInsight that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_exadata_insight#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiExadataInsight to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.enterpriseManagerBridgeId">EnterpriseManagerBridgeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.enterpriseManagerEntityDisplayName">EnterpriseManagerEntityDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.enterpriseManagerEntityIdentifier">EnterpriseManagerEntityIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.enterpriseManagerEntityName">EnterpriseManagerEntityName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.enterpriseManagerEntityType">EnterpriseManagerEntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.enterpriseManagerIdentifier">EnterpriseManagerIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.entitySource">EntitySource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.exadataDisplayName">ExadataDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.exadataInfraId">ExadataInfraId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.exadataInfraResourceType">ExadataInfraResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.exadataName">ExadataName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.exadataRackType">ExadataRackType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.exadataShape">ExadataShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.exadataType">ExadataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.isAutoSyncEnabled">IsAutoSyncEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.isVirtualizedExadata">IsVirtualizedExadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.memberVmClusterDetails">MemberVmClusterDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsList">DataOciOpsiExadataInsightMemberVmClusterDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.exadataInsightIdInput">ExadataInsightIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.exadataInsightId">ExadataInsightId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EnterpriseManagerBridgeId`<sup>Required</sup> <a name="EnterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.enterpriseManagerBridgeId"></a>

```go
func EnterpriseManagerBridgeId() *string
```

- *Type:* *string

---

##### `EnterpriseManagerEntityDisplayName`<sup>Required</sup> <a name="EnterpriseManagerEntityDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.enterpriseManagerEntityDisplayName"></a>

```go
func EnterpriseManagerEntityDisplayName() *string
```

- *Type:* *string

---

##### `EnterpriseManagerEntityIdentifier`<sup>Required</sup> <a name="EnterpriseManagerEntityIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.enterpriseManagerEntityIdentifier"></a>

```go
func EnterpriseManagerEntityIdentifier() *string
```

- *Type:* *string

---

##### `EnterpriseManagerEntityName`<sup>Required</sup> <a name="EnterpriseManagerEntityName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.enterpriseManagerEntityName"></a>

```go
func EnterpriseManagerEntityName() *string
```

- *Type:* *string

---

##### `EnterpriseManagerEntityType`<sup>Required</sup> <a name="EnterpriseManagerEntityType" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.enterpriseManagerEntityType"></a>

```go
func EnterpriseManagerEntityType() *string
```

- *Type:* *string

---

##### `EnterpriseManagerIdentifier`<sup>Required</sup> <a name="EnterpriseManagerIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.enterpriseManagerIdentifier"></a>

```go
func EnterpriseManagerIdentifier() *string
```

- *Type:* *string

---

##### `EntitySource`<sup>Required</sup> <a name="EntitySource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.entitySource"></a>

```go
func EntitySource() *string
```

- *Type:* *string

---

##### `ExadataDisplayName`<sup>Required</sup> <a name="ExadataDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.exadataDisplayName"></a>

```go
func ExadataDisplayName() *string
```

- *Type:* *string

---

##### `ExadataInfraId`<sup>Required</sup> <a name="ExadataInfraId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.exadataInfraId"></a>

```go
func ExadataInfraId() *string
```

- *Type:* *string

---

##### `ExadataInfraResourceType`<sup>Required</sup> <a name="ExadataInfraResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.exadataInfraResourceType"></a>

```go
func ExadataInfraResourceType() *string
```

- *Type:* *string

---

##### `ExadataName`<sup>Required</sup> <a name="ExadataName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.exadataName"></a>

```go
func ExadataName() *string
```

- *Type:* *string

---

##### `ExadataRackType`<sup>Required</sup> <a name="ExadataRackType" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.exadataRackType"></a>

```go
func ExadataRackType() *string
```

- *Type:* *string

---

##### `ExadataShape`<sup>Required</sup> <a name="ExadataShape" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.exadataShape"></a>

```go
func ExadataShape() *string
```

- *Type:* *string

---

##### `ExadataType`<sup>Required</sup> <a name="ExadataType" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.exadataType"></a>

```go
func ExadataType() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsAutoSyncEnabled`<sup>Required</sup> <a name="IsAutoSyncEnabled" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.isAutoSyncEnabled"></a>

```go
func IsAutoSyncEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsVirtualizedExadata`<sup>Required</sup> <a name="IsVirtualizedExadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.isVirtualizedExadata"></a>

```go
func IsVirtualizedExadata() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `MemberVmClusterDetails`<sup>Required</sup> <a name="MemberVmClusterDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.memberVmClusterDetails"></a>

```go
func MemberVmClusterDetails() DataOciOpsiExadataInsightMemberVmClusterDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsList">DataOciOpsiExadataInsightMemberVmClusterDetailsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `ExadataInsightIdInput`<sup>Optional</sup> <a name="ExadataInsightIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.exadataInsightIdInput"></a>

```go
func ExadataInsightIdInput() *string
```

- *Type:* *string

---

##### `ExadataInsightId`<sup>Required</sup> <a name="ExadataInsightId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.exadataInsightId"></a>

```go
func ExadataInsightId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsight.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiExadataInsightConfig <a name="DataOciOpsiExadataInsightConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsight"

&dataociopsiexadatainsight.DataOciOpsiExadataInsightConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ExadataInsightId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightConfig.property.exadataInsightId">ExadataInsightId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_exadata_insight#exadata_insight_id DataOciOpsiExadataInsight#exadata_insight_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExadataInsightId`<sup>Required</sup> <a name="ExadataInsightId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightConfig.property.exadataInsightId"></a>

```go
ExadataInsightId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_exadata_insight#exadata_insight_id DataOciOpsiExadataInsight#exadata_insight_id}.

---

### DataOciOpsiExadataInsightMemberVmClusterDetails <a name="DataOciOpsiExadataInsightMemberVmClusterDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsight"

&dataociopsiexadatainsight.DataOciOpsiExadataInsightMemberVmClusterDetails {

}
```


### DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails <a name="DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsight"

&dataociopsiexadatainsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails {

}
```


### DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails <a name="DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsight"

&dataociopsiexadatainsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails {

}
```


### DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails <a name="DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsight"

&dataociopsiexadatainsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails {

}
```


### DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts <a name="DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsight"

&dataociopsiexadatainsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts {

}
```


### DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails <a name="DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsight"

&dataociopsiexadatainsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiExadataInsightMemberVmClusterDetailsList <a name="DataOciOpsiExadataInsightMemberVmClusterDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsight"

dataociopsiexadatainsight.NewDataOciOpsiExadataInsightMemberVmClusterDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiExadataInsightMemberVmClusterDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsList.get"></a>

```go
func Get(index *f64) DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList <a name="DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsight"

dataociopsiexadatainsight.NewDataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.get"></a>

```go
func Get(index *f64) DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference <a name="DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsight"

dataociopsiexadatainsight.NewDataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.credentialSourceName">CredentialSourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.credentialType">CredentialType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.walletSecretId">WalletSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails">DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CredentialSourceName`<sup>Required</sup> <a name="CredentialSourceName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.credentialSourceName"></a>

```go
func CredentialSourceName() *string
```

- *Type:* *string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.credentialType"></a>

```go
func CredentialType() *string
```

- *Type:* *string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.passwordSecretId"></a>

```go
func PasswordSecretId() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `WalletSecretId`<sup>Required</sup> <a name="WalletSecretId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.walletSecretId"></a>

```go
func WalletSecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails">DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails</a>

---


### DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList <a name="DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsight"

dataociopsiexadatainsight.NewDataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.get"></a>

```go
func Get(index *f64) DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference <a name="DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsight"

dataociopsiexadatainsight.NewDataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.hostIp">HostIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts">DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostIp`<sup>Required</sup> <a name="HostIp" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.hostIp"></a>

```go
func HostIp() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts">DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts</a>

---


### DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList <a name="DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsight"

dataociopsiexadatainsight.NewDataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.get"></a>

```go
func Get(index *f64) DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference <a name="DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsight"

dataociopsiexadatainsight.NewDataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.hosts">Hosts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList">DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails">DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.hosts"></a>

```go
func Hosts() DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList">DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails">DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails</a>

---


### DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList <a name="DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsight"

dataociopsiexadatainsight.NewDataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.get"></a>

```go
func Get(index *f64) DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference <a name="DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsight"

dataociopsiexadatainsight.NewDataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.credentialSourceName">CredentialSourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.credentialType">CredentialType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.walletSecretId">WalletSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails">DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CredentialSourceName`<sup>Required</sup> <a name="CredentialSourceName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.credentialSourceName"></a>

```go
func CredentialSourceName() *string
```

- *Type:* *string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.credentialType"></a>

```go
func CredentialType() *string
```

- *Type:* *string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.passwordSecretId"></a>

```go
func PasswordSecretId() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `WalletSecretId`<sup>Required</sup> <a name="WalletSecretId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.walletSecretId"></a>

```go
func WalletSecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails">DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails</a>

---


### DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList <a name="DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsight"

dataociopsiexadatainsight.NewDataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.get"></a>

```go
func Get(index *f64) DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference <a name="DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsight"

dataociopsiexadatainsight.NewDataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.connectionCredentialDetails">ConnectionCredentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList">DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.connectionDetails">ConnectionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList">DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.credentialDetails">CredentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList">DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.databaseId">DatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.databaseResourceType">DatabaseResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.dbmPrivateEndpointId">DbmPrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.entitySource">EntitySource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.managementAgentId">ManagementAgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.opsiPrivateEndpointId">OpsiPrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails">DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConnectionCredentialDetails`<sup>Required</sup> <a name="ConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.connectionCredentialDetails"></a>

```go
func ConnectionCredentialDetails() DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList">DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList</a>

---

##### `ConnectionDetails`<sup>Required</sup> <a name="ConnectionDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.connectionDetails"></a>

```go
func ConnectionDetails() DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList">DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList</a>

---

##### `CredentialDetails`<sup>Required</sup> <a name="CredentialDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.credentialDetails"></a>

```go
func CredentialDetails() DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList">DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList</a>

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.databaseId"></a>

```go
func DatabaseId() *string
```

- *Type:* *string

---

##### `DatabaseResourceType`<sup>Required</sup> <a name="DatabaseResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.databaseResourceType"></a>

```go
func DatabaseResourceType() *string
```

- *Type:* *string

---

##### `DbmPrivateEndpointId`<sup>Required</sup> <a name="DbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.dbmPrivateEndpointId"></a>

```go
func DbmPrivateEndpointId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.deploymentType"></a>

```go
func DeploymentType() *string
```

- *Type:* *string

---

##### `EntitySource`<sup>Required</sup> <a name="EntitySource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.entitySource"></a>

```go
func EntitySource() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.managementAgentId"></a>

```go
func ManagementAgentId() *string
```

- *Type:* *string

---

##### `OpsiPrivateEndpointId`<sup>Required</sup> <a name="OpsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.opsiPrivateEndpointId"></a>

```go
func OpsiPrivateEndpointId() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails">DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails</a>

---


### DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference <a name="DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiexadatainsight"

dataociopsiexadatainsight.NewDataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.property.dbmPrivateEndpointId">DbmPrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.property.memberDatabaseDetails">MemberDatabaseDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList">DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.property.opsiPrivateEndpointId">OpsiPrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.property.vmclusterId">VmclusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.property.vmClusterType">VmClusterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetails">DataOciOpsiExadataInsightMemberVmClusterDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DbmPrivateEndpointId`<sup>Required</sup> <a name="DbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.property.dbmPrivateEndpointId"></a>

```go
func DbmPrivateEndpointId() *string
```

- *Type:* *string

---

##### `MemberDatabaseDetails`<sup>Required</sup> <a name="MemberDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.property.memberDatabaseDetails"></a>

```go
func MemberDatabaseDetails() DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList">DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList</a>

---

##### `OpsiPrivateEndpointId`<sup>Required</sup> <a name="OpsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.property.opsiPrivateEndpointId"></a>

```go
func OpsiPrivateEndpointId() *string
```

- *Type:* *string

---

##### `VmclusterId`<sup>Required</sup> <a name="VmclusterId" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.property.vmclusterId"></a>

```go
func VmclusterId() *string
```

- *Type:* *string

---

##### `VmClusterType`<sup>Required</sup> <a name="VmClusterType" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.property.vmClusterType"></a>

```go
func VmClusterType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOpsiExadataInsightMemberVmClusterDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiExadataInsight.DataOciOpsiExadataInsightMemberVmClusterDetails">DataOciOpsiExadataInsightMemberVmClusterDetails</a>

---




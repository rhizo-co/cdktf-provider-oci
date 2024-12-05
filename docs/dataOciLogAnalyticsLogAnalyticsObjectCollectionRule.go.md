# `dataOciLogAnalyticsLogAnalyticsObjectCollectionRule` Submodule <a name="`dataOciLogAnalyticsLogAnalyticsObjectCollectionRule` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsLogAnalyticsObjectCollectionRule <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rule oci_log_analytics_log_analytics_object_collection_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsobjectcollectionrule"

dataociloganalyticsloganalyticsobjectcollectionrule.NewDataOciLogAnalyticsLogAnalyticsObjectCollectionRule(scope Construct, id *string, config DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig) DataOciLogAnalyticsLogAnalyticsObjectCollectionRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig">DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig">DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsObjectCollectionRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsobjectcollectionrule"

dataociloganalyticsloganalyticsobjectcollectionrule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsobjectcollectionrule"

dataociloganalyticsloganalyticsobjectcollectionrule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsobjectcollectionrule"

dataociloganalyticsloganalyticsobjectcollectionrule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsobjectcollectionrule"

dataociloganalyticsloganalyticsobjectcollectionrule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsObjectCollectionRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsObjectCollectionRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciLogAnalyticsLogAnalyticsObjectCollectionRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsObjectCollectionRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.charEncoding">CharEncoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.collectionType">CollectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.entityId">EntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.isForceHistoricCollection">IsForceHistoricCollection</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logGroupId">LogGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logSet">LogSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logSetExtRegex">LogSetExtRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logSetKey">LogSetKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logSourceName">LogSourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logType">LogType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.objectNameFilters">ObjectNameFilters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.osBucketName">OsBucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.osNamespace">OsNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.overrides">Overrides</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList">DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.pollSince">PollSince</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.pollTill">PollTill</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logAnalyticsObjectCollectionRuleIdInput">LogAnalyticsObjectCollectionRuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logAnalyticsObjectCollectionRuleId">LogAnalyticsObjectCollectionRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CharEncoding`<sup>Required</sup> <a name="CharEncoding" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.charEncoding"></a>

```go
func CharEncoding() *string
```

- *Type:* *string

---

##### `CollectionType`<sup>Required</sup> <a name="CollectionType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.collectionType"></a>

```go
func CollectionType() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.entityId"></a>

```go
func EntityId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsForceHistoricCollection`<sup>Required</sup> <a name="IsForceHistoricCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.isForceHistoricCollection"></a>

```go
func IsForceHistoricCollection() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logGroupId"></a>

```go
func LogGroupId() *string
```

- *Type:* *string

---

##### `LogSet`<sup>Required</sup> <a name="LogSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logSet"></a>

```go
func LogSet() *string
```

- *Type:* *string

---

##### `LogSetExtRegex`<sup>Required</sup> <a name="LogSetExtRegex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logSetExtRegex"></a>

```go
func LogSetExtRegex() *string
```

- *Type:* *string

---

##### `LogSetKey`<sup>Required</sup> <a name="LogSetKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logSetKey"></a>

```go
func LogSetKey() *string
```

- *Type:* *string

---

##### `LogSourceName`<sup>Required</sup> <a name="LogSourceName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logSourceName"></a>

```go
func LogSourceName() *string
```

- *Type:* *string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logType"></a>

```go
func LogType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ObjectNameFilters`<sup>Required</sup> <a name="ObjectNameFilters" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.objectNameFilters"></a>

```go
func ObjectNameFilters() *[]*string
```

- *Type:* *[]*string

---

##### `OsBucketName`<sup>Required</sup> <a name="OsBucketName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.osBucketName"></a>

```go
func OsBucketName() *string
```

- *Type:* *string

---

##### `OsNamespace`<sup>Required</sup> <a name="OsNamespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.osNamespace"></a>

```go
func OsNamespace() *string
```

- *Type:* *string

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.overrides"></a>

```go
func Overrides() DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList">DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList</a>

---

##### `PollSince`<sup>Required</sup> <a name="PollSince" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.pollSince"></a>

```go
func PollSince() *string
```

- *Type:* *string

---

##### `PollTill`<sup>Required</sup> <a name="PollTill" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.pollTill"></a>

```go
func PollTill() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `LogAnalyticsObjectCollectionRuleIdInput`<sup>Optional</sup> <a name="LogAnalyticsObjectCollectionRuleIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logAnalyticsObjectCollectionRuleIdInput"></a>

```go
func LogAnalyticsObjectCollectionRuleIdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `LogAnalyticsObjectCollectionRuleId`<sup>Required</sup> <a name="LogAnalyticsObjectCollectionRuleId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.logAnalyticsObjectCollectionRuleId"></a>

```go
func LogAnalyticsObjectCollectionRuleId() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsobjectcollectionrule"

&dataociloganalyticsloganalyticsobjectcollectionrule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	LogAnalyticsObjectCollectionRuleId: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.logAnalyticsObjectCollectionRuleId">LogAnalyticsObjectCollectionRuleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rule#log_analytics_object_collection_rule_id DataOciLogAnalyticsLogAnalyticsObjectCollectionRule#log_analytics_object_collection_rule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rule#namespace DataOciLogAnalyticsLogAnalyticsObjectCollectionRule#namespace}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LogAnalyticsObjectCollectionRuleId`<sup>Required</sup> <a name="LogAnalyticsObjectCollectionRuleId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.logAnalyticsObjectCollectionRuleId"></a>

```go
LogAnalyticsObjectCollectionRuleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rule#log_analytics_object_collection_rule_id DataOciLogAnalyticsLogAnalyticsObjectCollectionRule#log_analytics_object_collection_rule_id}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rule#namespace DataOciLogAnalyticsLogAnalyticsObjectCollectionRule#namespace}.

---

### DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverrides <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverrides" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverrides"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverrides.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsobjectcollectionrule"

&dataociloganalyticsloganalyticsobjectcollectionrule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverrides {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsobjectcollectionrule"

dataociloganalyticsloganalyticsobjectcollectionrule.NewDataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.get"></a>

```go
func Get(index *f64) DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsobjectcollectionrule"

dataociloganalyticsloganalyticsobjectcollectionrule.NewDataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.property.matchType">MatchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.property.matchValue">MatchValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.property.propertyName">PropertyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.property.propertyValue">PropertyValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverrides">DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchType`<sup>Required</sup> <a name="MatchType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.property.matchType"></a>

```go
func MatchType() *string
```

- *Type:* *string

---

##### `MatchValue`<sup>Required</sup> <a name="MatchValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.property.matchValue"></a>

```go
func MatchValue() *string
```

- *Type:* *string

---

##### `PropertyName`<sup>Required</sup> <a name="PropertyName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.property.propertyName"></a>

```go
func PropertyName() *string
```

- *Type:* *string

---

##### `PropertyValue`<sup>Required</sup> <a name="PropertyValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.property.propertyValue"></a>

```go
func PropertyValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverrides
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRule.DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverrides">DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverrides</a>

---




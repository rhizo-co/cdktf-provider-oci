# `dataOciOsubUsageComputedUsage` Submodule <a name="`dataOciOsubUsageComputedUsage` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsubUsageComputedUsage <a name="DataOciOsubUsageComputedUsage" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage oci_osub_usage_computed_usage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubusagecomputedusage"

dataociosubusagecomputedusage.NewDataOciOsubUsageComputedUsage(scope Construct, id *string, config DataOciOsubUsageComputedUsageConfig) DataOciOsubUsageComputedUsage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig">DataOciOsubUsageComputedUsageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig">DataOciOsubUsageComputedUsageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.resetFields">ResetFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.resetXOneOriginRegion">ResetXOneOriginRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetFields` <a name="ResetFields" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.resetFields"></a>

```go
func ResetFields()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.resetId"></a>

```go
func ResetId()
```

##### `ResetXOneOriginRegion` <a name="ResetXOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.resetXOneOriginRegion"></a>

```go
func ResetXOneOriginRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsubUsageComputedUsage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubusagecomputedusage"

dataociosubusagecomputedusage.DataOciOsubUsageComputedUsage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubusagecomputedusage"

dataociosubusagecomputedusage.DataOciOsubUsageComputedUsage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubusagecomputedusage"

dataociosubusagecomputedusage.DataOciOsubUsageComputedUsage_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubusagecomputedusage"

dataociosubusagecomputedusage.DataOciOsubUsageComputedUsage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOsubUsageComputedUsage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOsubUsageComputedUsage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOsubUsageComputedUsage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsubUsageComputedUsage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.commitmentServiceId">CommitmentServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.computeSource">ComputeSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.cost">Cost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.costRounded">CostRounded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.currencyCode">CurrencyCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.dataCenter">DataCenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.isInvoiced">IsInvoiced</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.mqsMessageId">MqsMessageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.netUnitPrice">NetUnitPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.originalUsageNumber">OriginalUsageNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.parentProduct">ParentProduct</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList">DataOciOsubUsageComputedUsageParentProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.parentSubscribedServiceId">ParentSubscribedServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.planNumber">PlanNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.product">Product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList">DataOciOsubUsageComputedUsageProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.quantity">Quantity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.rateCardId">RateCardId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.rateCardTierdId">RateCardTierdId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.timeMeteredOn">TimeMeteredOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.timeOfArrival">TimeOfArrival</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.unitOfMeasure">UnitOfMeasure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.usageNumber">UsageNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.computedUsageIdInput">ComputedUsageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.fieldsInput">FieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.xOneOriginRegionInput">XOneOriginRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.computedUsageId">ComputedUsageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.fields">Fields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.xOneOriginRegion">XOneOriginRegion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CommitmentServiceId`<sup>Required</sup> <a name="CommitmentServiceId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.commitmentServiceId"></a>

```go
func CommitmentServiceId() *string
```

- *Type:* *string

---

##### `ComputeSource`<sup>Required</sup> <a name="ComputeSource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.computeSource"></a>

```go
func ComputeSource() *string
```

- *Type:* *string

---

##### `Cost`<sup>Required</sup> <a name="Cost" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.cost"></a>

```go
func Cost() *string
```

- *Type:* *string

---

##### `CostRounded`<sup>Required</sup> <a name="CostRounded" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.costRounded"></a>

```go
func CostRounded() *string
```

- *Type:* *string

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.currencyCode"></a>

```go
func CurrencyCode() *string
```

- *Type:* *string

---

##### `DataCenter`<sup>Required</sup> <a name="DataCenter" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.dataCenter"></a>

```go
func DataCenter() *string
```

- *Type:* *string

---

##### `IsInvoiced`<sup>Required</sup> <a name="IsInvoiced" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.isInvoiced"></a>

```go
func IsInvoiced() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MqsMessageId`<sup>Required</sup> <a name="MqsMessageId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.mqsMessageId"></a>

```go
func MqsMessageId() *string
```

- *Type:* *string

---

##### `NetUnitPrice`<sup>Required</sup> <a name="NetUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.netUnitPrice"></a>

```go
func NetUnitPrice() *string
```

- *Type:* *string

---

##### `OriginalUsageNumber`<sup>Required</sup> <a name="OriginalUsageNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.originalUsageNumber"></a>

```go
func OriginalUsageNumber() *string
```

- *Type:* *string

---

##### `ParentProduct`<sup>Required</sup> <a name="ParentProduct" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.parentProduct"></a>

```go
func ParentProduct() DataOciOsubUsageComputedUsageParentProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList">DataOciOsubUsageComputedUsageParentProductList</a>

---

##### `ParentSubscribedServiceId`<sup>Required</sup> <a name="ParentSubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.parentSubscribedServiceId"></a>

```go
func ParentSubscribedServiceId() *string
```

- *Type:* *string

---

##### `PlanNumber`<sup>Required</sup> <a name="PlanNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.planNumber"></a>

```go
func PlanNumber() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.product"></a>

```go
func Product() DataOciOsubUsageComputedUsageProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList">DataOciOsubUsageComputedUsageProductList</a>

---

##### `Quantity`<sup>Required</sup> <a name="Quantity" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.quantity"></a>

```go
func Quantity() *string
```

- *Type:* *string

---

##### `RateCardId`<sup>Required</sup> <a name="RateCardId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.rateCardId"></a>

```go
func RateCardId() *string
```

- *Type:* *string

---

##### `RateCardTierdId`<sup>Required</sup> <a name="RateCardTierdId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.rateCardTierdId"></a>

```go
func RateCardTierdId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeMeteredOn`<sup>Required</sup> <a name="TimeMeteredOn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.timeMeteredOn"></a>

```go
func TimeMeteredOn() *string
```

- *Type:* *string

---

##### `TimeOfArrival`<sup>Required</sup> <a name="TimeOfArrival" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.timeOfArrival"></a>

```go
func TimeOfArrival() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UnitOfMeasure`<sup>Required</sup> <a name="UnitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.unitOfMeasure"></a>

```go
func UnitOfMeasure() *string
```

- *Type:* *string

---

##### `UsageNumber`<sup>Required</sup> <a name="UsageNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.usageNumber"></a>

```go
func UsageNumber() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ComputedUsageIdInput`<sup>Optional</sup> <a name="ComputedUsageIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.computedUsageIdInput"></a>

```go
func ComputedUsageIdInput() *string
```

- *Type:* *string

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.fieldsInput"></a>

```go
func FieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `XOneOriginRegionInput`<sup>Optional</sup> <a name="XOneOriginRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.xOneOriginRegionInput"></a>

```go
func XOneOriginRegionInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ComputedUsageId`<sup>Required</sup> <a name="ComputedUsageId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.computedUsageId"></a>

```go
func ComputedUsageId() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.fields"></a>

```go
func Fields() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `XOneOriginRegion`<sup>Required</sup> <a name="XOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.xOneOriginRegion"></a>

```go
func XOneOriginRegion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsubUsageComputedUsageConfig <a name="DataOciOsubUsageComputedUsageConfig" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubusagecomputedusage"

&dataociosubusagecomputedusage.DataOciOsubUsageComputedUsageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	ComputedUsageId: *string,
	Fields: *[]*string,
	Id: *string,
	XOneOriginRegion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#compartment_id DataOciOsubUsageComputedUsage#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.computedUsageId">ComputedUsageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#computed_usage_id DataOciOsubUsageComputedUsage#computed_usage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.fields">Fields</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#fields DataOciOsubUsageComputedUsage#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#id DataOciOsubUsageComputedUsage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.xOneOriginRegion">XOneOriginRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#x_one_origin_region DataOciOsubUsageComputedUsage#x_one_origin_region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#compartment_id DataOciOsubUsageComputedUsage#compartment_id}.

---

##### `ComputedUsageId`<sup>Required</sup> <a name="ComputedUsageId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.computedUsageId"></a>

```go
ComputedUsageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#computed_usage_id DataOciOsubUsageComputedUsage#computed_usage_id}.

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.fields"></a>

```go
Fields *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#fields DataOciOsubUsageComputedUsage#fields}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#id DataOciOsubUsageComputedUsage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `XOneOriginRegion`<sup>Optional</sup> <a name="XOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.xOneOriginRegion"></a>

```go
XOneOriginRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#x_one_origin_region DataOciOsubUsageComputedUsage#x_one_origin_region}.

---

### DataOciOsubUsageComputedUsageParentProduct <a name="DataOciOsubUsageComputedUsageParentProduct" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProduct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubusagecomputedusage"

&dataociosubusagecomputedusage.DataOciOsubUsageComputedUsageParentProduct {

}
```


### DataOciOsubUsageComputedUsageProduct <a name="DataOciOsubUsageComputedUsageProduct" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProduct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubusagecomputedusage"

&dataociosubusagecomputedusage.DataOciOsubUsageComputedUsageProduct {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsubUsageComputedUsageParentProductList <a name="DataOciOsubUsageComputedUsageParentProductList" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubusagecomputedusage"

dataociosubusagecomputedusage.NewDataOciOsubUsageComputedUsageParentProductList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsubUsageComputedUsageParentProductList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.get"></a>

```go
func Get(index *f64) DataOciOsubUsageComputedUsageParentProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsubUsageComputedUsageParentProductOutputReference <a name="DataOciOsubUsageComputedUsageParentProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubusagecomputedusage"

dataociosubusagecomputedusage.NewDataOciOsubUsageComputedUsageParentProductOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsubUsageComputedUsageParentProductOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.billingCategory">BillingCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.partNumber">PartNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.productCategory">ProductCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.provisioningGroup">ProvisioningGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.ucmRateCardPartType">UcmRateCardPartType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.unitOfMeasure">UnitOfMeasure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProduct">DataOciOsubUsageComputedUsageParentProduct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BillingCategory`<sup>Required</sup> <a name="BillingCategory" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.billingCategory"></a>

```go
func BillingCategory() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartNumber`<sup>Required</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.partNumber"></a>

```go
func PartNumber() *string
```

- *Type:* *string

---

##### `ProductCategory`<sup>Required</sup> <a name="ProductCategory" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.productCategory"></a>

```go
func ProductCategory() *string
```

- *Type:* *string

---

##### `ProvisioningGroup`<sup>Required</sup> <a name="ProvisioningGroup" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.provisioningGroup"></a>

```go
func ProvisioningGroup() *string
```

- *Type:* *string

---

##### `UcmRateCardPartType`<sup>Required</sup> <a name="UcmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.ucmRateCardPartType"></a>

```go
func UcmRateCardPartType() *string
```

- *Type:* *string

---

##### `UnitOfMeasure`<sup>Required</sup> <a name="UnitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.unitOfMeasure"></a>

```go
func UnitOfMeasure() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsubUsageComputedUsageParentProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProduct">DataOciOsubUsageComputedUsageParentProduct</a>

---


### DataOciOsubUsageComputedUsageProductList <a name="DataOciOsubUsageComputedUsageProductList" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubusagecomputedusage"

dataociosubusagecomputedusage.NewDataOciOsubUsageComputedUsageProductList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsubUsageComputedUsageProductList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.get"></a>

```go
func Get(index *f64) DataOciOsubUsageComputedUsageProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsubUsageComputedUsageProductOutputReference <a name="DataOciOsubUsageComputedUsageProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubusagecomputedusage"

dataociosubusagecomputedusage.NewDataOciOsubUsageComputedUsageProductOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsubUsageComputedUsageProductOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.billingCategory">BillingCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.partNumber">PartNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.productCategory">ProductCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.provisioningGroup">ProvisioningGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.ucmRateCardPartType">UcmRateCardPartType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.unitOfMeasure">UnitOfMeasure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProduct">DataOciOsubUsageComputedUsageProduct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BillingCategory`<sup>Required</sup> <a name="BillingCategory" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.billingCategory"></a>

```go
func BillingCategory() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartNumber`<sup>Required</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.partNumber"></a>

```go
func PartNumber() *string
```

- *Type:* *string

---

##### `ProductCategory`<sup>Required</sup> <a name="ProductCategory" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.productCategory"></a>

```go
func ProductCategory() *string
```

- *Type:* *string

---

##### `ProvisioningGroup`<sup>Required</sup> <a name="ProvisioningGroup" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.provisioningGroup"></a>

```go
func ProvisioningGroup() *string
```

- *Type:* *string

---

##### `UcmRateCardPartType`<sup>Required</sup> <a name="UcmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.ucmRateCardPartType"></a>

```go
func UcmRateCardPartType() *string
```

- *Type:* *string

---

##### `UnitOfMeasure`<sup>Required</sup> <a name="UnitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.unitOfMeasure"></a>

```go
func UnitOfMeasure() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsubUsageComputedUsageProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProduct">DataOciOsubUsageComputedUsageProduct</a>

---




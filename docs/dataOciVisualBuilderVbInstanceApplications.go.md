# `dataOciVisualBuilderVbInstanceApplications` Submodule <a name="`dataOciVisualBuilderVbInstanceApplications` Submodule" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciVisualBuilderVbInstanceApplications <a name="DataOciVisualBuilderVbInstanceApplications" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications oci_visual_builder_vb_instance_applications}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstanceapplications"

dataocivisualbuildervbinstanceapplications.NewDataOciVisualBuilderVbInstanceApplications(scope Construct, id *string, config DataOciVisualBuilderVbInstanceApplicationsConfig) DataOciVisualBuilderVbInstanceApplications
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig">DataOciVisualBuilderVbInstanceApplicationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig">DataOciVisualBuilderVbInstanceApplicationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.resetIdcsOpenId">ResetIdcsOpenId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.resetId"></a>

```go
func ResetId()
```

##### `ResetIdcsOpenId` <a name="ResetIdcsOpenId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.resetIdcsOpenId"></a>

```go
func ResetIdcsOpenId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciVisualBuilderVbInstanceApplications resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstanceapplications"

dataocivisualbuildervbinstanceapplications.DataOciVisualBuilderVbInstanceApplications_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstanceapplications"

dataocivisualbuildervbinstanceapplications.DataOciVisualBuilderVbInstanceApplications_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstanceapplications"

dataocivisualbuildervbinstanceapplications.DataOciVisualBuilderVbInstanceApplications_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstanceapplications"

dataocivisualbuildervbinstanceapplications.DataOciVisualBuilderVbInstanceApplications_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciVisualBuilderVbInstanceApplications resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciVisualBuilderVbInstanceApplications to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciVisualBuilderVbInstanceApplications that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciVisualBuilderVbInstanceApplications to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.applicationSummaryCollection">ApplicationSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList">DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.idcsOpenIdInput">IdcsOpenIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.vbInstanceIdInput">VbInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.idcsOpenId">IdcsOpenId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.vbInstanceId">VbInstanceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ApplicationSummaryCollection`<sup>Required</sup> <a name="ApplicationSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.applicationSummaryCollection"></a>

```go
func ApplicationSummaryCollection() DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList">DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList</a>

---

##### `IdcsOpenIdInput`<sup>Optional</sup> <a name="IdcsOpenIdInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.idcsOpenIdInput"></a>

```go
func IdcsOpenIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `VbInstanceIdInput`<sup>Optional</sup> <a name="VbInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.vbInstanceIdInput"></a>

```go
func VbInstanceIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsOpenId`<sup>Required</sup> <a name="IdcsOpenId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.idcsOpenId"></a>

```go
func IdcsOpenId() *string
```

- *Type:* *string

---

##### `VbInstanceId`<sup>Required</sup> <a name="VbInstanceId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.vbInstanceId"></a>

```go
func VbInstanceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection <a name="DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstanceapplications"

&dataocivisualbuildervbinstanceapplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection {

}
```


### DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems <a name="DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstanceapplications"

&dataocivisualbuildervbinstanceapplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems {

}
```


### DataOciVisualBuilderVbInstanceApplicationsConfig <a name="DataOciVisualBuilderVbInstanceApplicationsConfig" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstanceapplications"

&dataocivisualbuildervbinstanceapplications.DataOciVisualBuilderVbInstanceApplicationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	VbInstanceId: *string,
	Id: *string,
	IdcsOpenId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.vbInstanceId">VbInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#vb_instance_id DataOciVisualBuilderVbInstanceApplications#vb_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#id DataOciVisualBuilderVbInstanceApplications#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.idcsOpenId">IdcsOpenId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#idcs_open_id DataOciVisualBuilderVbInstanceApplications#idcs_open_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `VbInstanceId`<sup>Required</sup> <a name="VbInstanceId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.vbInstanceId"></a>

```go
VbInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#vb_instance_id DataOciVisualBuilderVbInstanceApplications#vb_instance_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#id DataOciVisualBuilderVbInstanceApplications#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdcsOpenId`<sup>Optional</sup> <a name="IdcsOpenId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.idcsOpenId"></a>

```go
IdcsOpenId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#idcs_open_id DataOciVisualBuilderVbInstanceApplications#idcs_open_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList <a name="DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstanceapplications"

dataocivisualbuildervbinstanceapplications.NewDataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference <a name="DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstanceapplications"

dataocivisualbuildervbinstanceapplications.NewDataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems">DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems">DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems</a>

---


### DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList <a name="DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstanceapplications"

dataocivisualbuildervbinstanceapplications.NewDataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.get"></a>

```go
func Get(index *f64) DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference <a name="DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocivisualbuildervbinstanceapplications"

dataocivisualbuildervbinstanceapplications.NewDataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList">DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection">DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.property.items"></a>

```go
func Items() DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList">DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection">DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection</a>

---



